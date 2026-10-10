// Genera public/sitemap.xml a partir de las páginas fijas y de los slugs de src/assets/data.ts.
// Se ejecuta solo antes de cada `npm run build` (script "prebuild"), así el sitemap nunca queda desactualizado.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://www.veravillamizarabogados.com';
const data = readFileSync(join(root, 'src/assets/data.ts'), 'utf8');

/** Slugs del arreglo `export const <name>` (hasta el siguiente `export const`). */
function slugsOf(name) {
  const start = data.indexOf(`export const ${name}`);
  if (start < 0) throw new Error(`No se encontró ${name} en data.ts`);
  const next = data.indexOf('\nexport const ', start + 10);
  const block = data.slice(start, next < 0 ? undefined : next);
  return [...block.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
}

// [ruta, prioridad]. /testimonials queda fuera a propósito (noindex hasta tener textos reales).
const pages = [
  ['/', 1.0],
  ['/our-services', 0.9], ['/about', 0.8], ['/our-team', 0.8], ['/case-study', 0.8], ['/blog/grid-2', 0.7], ['/faq', 0.7], ['/contact', 0.9],
  ...slugsOf('serviceDetails').map(s => [`/service-details/${s}`, 0.8]),
  ...slugsOf('caseDetails').map(s => [`/case-single/${s}`, 0.6]),
  ...slugsOf('blogDetails').map(s => [`/blog-details/${s}`, 0.6]),
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, prio]) => `  <url>\n    <loc>${ORIGIN}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${prio.toFixed(1)}</priority>\n  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml: ${pages.length} URLs`);
