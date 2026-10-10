// Pre-renderiza las páginas del sitio: guarda un HTML ya armado de cada ruta (con su título, descripción,
// contenido y datos estructurados) para buscadores y vistas previas de WhatsApp, Facebook o LinkedIn,
// que no ejecutan JavaScript. Al cargar en un navegador, Angular reemplaza ese HTML y la web funciona igual.
//
// Uso: node scripts/prerender.mjs        (después de `ng build`)
// No necesita dependencias: usa el Chrome instalado (variable CHROME_BIN para indicar otro).
// Si algo falla (sin Chrome, error en una página) NO rompe la publicación: deja la web como estaba.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist/advicx-ng/browser');
const ORIGIN = 'https://www.veravillamizarabogados.com';
const CONCURRENCY = 4;

const log = (...a) => console.log('[prerender]', ...a);
const bail = (msg) => { log('OMITIDO:', msg); process.exit(0); };

function findChrome() {
  const candidates = [
    process.env.CHROME_BIN,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);
  return candidates.find(p => existsSync(p));
}

if (!existsSync(join(dist, 'index.html'))) bail('no existe dist/advicx-ng/browser; ejecuta primero `ng build`.');
const chrome = findChrome();
if (!chrome) bail('no se encontró Chrome.');

// Rutas: las del sitemap, más /testimonials (no se indexa, pero así no parpadea la portada al abrirla).
const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const routes = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(ORIGIN, '') || '/').concat('/testimonials'))];

// El servidor siempre responde con el index.html original (el "cascarón"), nunca con una página ya pre-renderizada.
const shell = readFileSync(join(dist, 'index.html'));
const types = { '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.txt': 'text/plain', '.xml': 'application/xml' };
const server = createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  const file = normalize(join(dist, path));
  if (path !== '/' && file.startsWith(dist) && existsSync(file) && statSync(file).isFile() && !file.endsWith('index.html')) {
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
    return res.end(readFileSync(file));
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(shell);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port;

function dumpDom(path) {
  return new Promise((resolve, reject) => {
    const args = ['--headless=new', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars',
      '--window-size=1366,900', '--virtual-time-budget=12000', '--dump-dom', `http://127.0.0.1:${port}${path}`];
    const p = spawn(chrome, args, { stdio: ['ignore', 'pipe', 'ignore'] });
    let out = '';
    const timer = setTimeout(() => { p.kill(); reject(new Error('tiempo agotado')); }, 90000);
    p.stdout.on('data', d => out += d);
    p.on('close', () => { clearTimeout(timer); resolve(out); });
    p.on('error', e => { clearTimeout(timer); reject(e); });
  });
}

// Se comprueba que la página esté realmente armada antes de guardarla.
const looksRendered = (html) => /<h1[\s>]/.test(html) && /<title>[^<]{5,}<\/title>/.test(html) && /rel="canonical"/.test(html) && html.length > 20000;

const results = new Map();
let next = 0;
async function worker() {
  while (next < routes.length) {
    const path = routes[next++];
    try {
      const html = await dumpDom(path);
      if (!looksRendered(html)) throw new Error('HTML incompleto');
      results.set(path, '<!DOCTYPE html>\n' + html.replace(/^<!DOCTYPE html>\s*/i, ''));
    } catch (e) { log(`falló ${path}: ${e.message}`); }
  }
}
log(`Chrome: ${chrome}`);
log(`Pre-renderizando ${routes.length} páginas (${CONCURRENCY} a la vez)...`);
const t0 = Date.now();
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
server.close();

if (results.size < routes.length) bail(`solo ${results.size} de ${routes.length} páginas quedaron bien; no se modifica nada.`);

for (const [path, html] of results) {
  const target = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
}
log(`Listo: ${results.size} páginas en ${((Date.now() - t0) / 1000).toFixed(0)} s.`);
