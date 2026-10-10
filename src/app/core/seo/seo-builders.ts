import { blogDetails, blogs, caseDetails, faqConsultas, faqGeneral, serviceDetails, servicesData } from '@/assets/data';
import { ORG_ID, SeoData, SITE_ORIGIN } from './seo.service';

/*
 * SEO de cada página. `seoForPath` recibe la ruta (p. ej. "/about" o "/case-single/nulidad-de-traslado")
 * y devuelve su título, descripción, migas de pan y datos estructurados.
 * Las páginas de caso, servicio y artículo se construyen solas a partir de los datos de `data.ts`,
 * así que al agregar contenido nuevo el SEO se actualiza sin tocar nada más.
 */

const HOME: SeoData = {
    title: 'Abogados Laboralistas en Bucaramanga | Vera Villamizar Abogados',
    description: 'Abogados en Bucaramanga: derecho laboral, pensiones y pensión docente FOMAG. Más de 15 años de experiencia y +800 clientes. Agenda tu asesoría.',
    canonicalPath: '/',
};

const INICIO = { name: 'Inicio', path: '/' };

const STATIC_PAGES: Record<string, SeoData> = {
    '/': HOME,
    '/home-1': HOME,
    '/about': {
        title: 'Sobre Nosotros | Abogados en Bucaramanga',
        description: 'Firma de abogados en Bucaramanga con más de 15 años de experiencia en derecho laboral, laboral docente, pensiones y seguridad social.',
        breadcrumbs: [INICIO, { name: 'Sobre Nosotros', path: '/about' }],
    },
    '/our-team': {
        title: 'Nuestro Equipo de Abogados en Bucaramanga',
        description: 'Conoce a los abogados de Vera Villamizar: Jorge Vera (seguridad social), Jairo Silva (derecho público) y Allison Rivera (derecho administrativo).',
        breadcrumbs: [INICIO, { name: 'Nuestro Equipo', path: '/our-team' }],
    },
    '/faq': {
        title: 'Preguntas Frecuentes: Pensiones y Laboral',
        description: 'Resolvemos tus dudas sobre requisitos de pensión, despido sin justa causa, traslado a Colpensiones, prestaciones sociales e invalidez.',
        breadcrumbs: [INICIO, { name: 'Preguntas Frecuentes', path: '/faq' }],
        jsonLd: [{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [...faqGeneral, ...faqConsultas].map(f => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
        }],
    },
    '/contact': {
        title: 'Contacto | Abogados en Bucaramanga',
        description: 'Agenda tu asesoría con abogados en Bucaramanga. Calle 36 #13-48, García Rovira. WhatsApp 315 718 9078. Lunes a viernes, de 8:00 a. m. a 4:00 p. m.',
        breadcrumbs: [INICIO, { name: 'Contacto', path: '/contact' }],
        jsonLd: [{ '@context': 'https://schema.org', '@type': 'ContactPage', url: SITE_ORIGIN + '/contact', about: { '@id': ORG_ID } }],
    },
    '/our-services': {
        title: 'Servicios Jurídicos Laborales y Pensionales',
        description: 'Pensiones, docentes FOMAG 2277 y 1278, reliquidación, invalidez, sobrevivientes, cesantías, demandas laborales y asesoría empresarial en Bucaramanga.',
        breadcrumbs: [INICIO, { name: 'Nuestros Servicios', path: '/our-services' }],
        jsonLd: [{
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Servicios de Vera Villamizar Abogados',
            itemListElement: servicesData.map((s, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: baseName(serviceDetails.find(d => d.slug === s.slug)?.heading ?? s.title),
                url: `${SITE_ORIGIN}/service-details/${s.slug}`,
            })),
        }],
    },
    '/case-study': {
        title: 'Casos de Derecho Laboral y Pensiones',
        description: 'Casos de reliquidación, nulidad de traslado, pensión docente, despido y litigio estratégico de Vera Villamizar Abogados en Bucaramanga.',
        breadcrumbs: [INICIO, { name: 'Casos de Estudio', path: '/case-study' }],
    },
    '/blog/grid-2': {
        title: 'Blog Jurídico: Pensiones y Derecho Laboral',
        description: 'Artículos sobre reforma pensional, nulidad de traslado, estabilidad laboral, pensión de vejez, despidos y liquidación laboral en Colombia.',
        breadcrumbs: [INICIO, { name: 'Blog Jurídico', path: '/blog/grid-2' }],
    },
    // Opiniones provisionales de empresas aliadas: no se indexan hasta tener el texto real o aprobado.
    '/testimonials': {
        title: 'Testimonios de Empresas Aliadas',
        description: 'Empresas aliadas que trabajan con Vera Villamizar Abogados, firma de abogados en Bucaramanga.',
        noindex: true,
    },
    // Páginas genéricas sin contenido propio: duplicarían a las páginas de cada caso, servicio o artículo.
    '/case-single': { title: 'Detalle de Caso', description: 'Casos de estudio de Vera Villamizar Abogados.', canonicalPath: '/case-study', noindex: true },
    '/service-details': { title: 'Detalle de Servicio', description: 'Servicios de Vera Villamizar Abogados.', canonicalPath: '/our-services', noindex: true },
    '/blog-details': { title: 'Detalle del Blog', description: 'Blog jurídico de Vera Villamizar Abogados.', canonicalPath: '/blog/grid-2', noindex: true },
};

export const NOT_FOUND: SeoData = { title: 'Página no encontrada', description: 'La página que buscas no existe o fue movida. Vuelve al inicio de Vera Villamizar Abogados.', noindex: true };

export function seoForPath(rawPath: string): SeoData {
    const path = normalize(rawPath);

    const staticPage = STATIC_PAGES[path];
    if (staticPage) return staticPage;

    const [, section, slug] = path.split('/');
    if (section === 'service-details') return serviceSeo(slug) ?? NOT_FOUND;
    if (section === 'case-single') return caseSeo(slug) ?? NOT_FOUND;
    if (section === 'blog-details') return blogSeo(slug) ?? NOT_FOUND;

    return NOT_FOUND;
}

function serviceSeo(slug: string): SeoData | undefined {
    const service = servicesData.find(s => s.slug === slug);
    const detail = serviceDetails.find(d => d.slug === slug);
    if (!service || !detail) return undefined;

    const name = baseName(detail.heading);
    const path = `/service-details/${slug}`;
    return {
        title: `${name} en Bucaramanga`,
        description: truncate(`${service.description} Asesoría legal en Bucaramanga con Vera Villamizar Abogados.`),
        breadcrumbs: [INICIO, { name: 'Nuestros Servicios', path: '/our-services' }, { name, path }],
        jsonLd: [{
            '@context': 'https://schema.org',
            '@type': 'Service',
            name,
            serviceType: name,
            description: service.description,
            url: SITE_ORIGIN + path,
            provider: { '@id': ORG_ID },
            areaServed: [{ '@type': 'City', name: 'Bucaramanga' }, { '@type': 'Country', name: 'Colombia' }],
        }],
    };
}

function caseSeo(slug: string): SeoData | undefined {
    const c = caseDetails.find(x => x.slug === slug);
    if (!c) return undefined;
    const path = `/case-single/${slug}`;
    return {
        title: `${c.title} | Casos de Estudio`,
        description: truncate(c.intro[0]),
        image: c.image,
        breadcrumbs: [INICIO, { name: 'Casos de Estudio', path: '/case-study' }, { name: c.title, path }],
    };
}

function blogSeo(slug: string): SeoData | undefined {
    const post = blogs.find(b => b.slug === slug);
    const detail = blogDetails.find(d => d.slug === slug);
    if (!post || !detail) return undefined;
    const path = `/blog-details/${slug}`;
    return {
        title: post.title ?? detail.heading,
        description: truncate(detail.intro[0]),
        image: post.image,
        type: 'article',
        breadcrumbs: [INICIO, { name: 'Blog Jurídico', path: '/blog/grid-2' }, { name: post.title ?? detail.heading, path }],
        jsonLd: [{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title ?? detail.heading,
            description: truncate(detail.intro[0]),
            image: absoluteUrl(post.image),
            inLanguage: 'es-CO',
            mainEntityOfPage: SITE_ORIGIN + path,
            author: { '@id': ORG_ID },
            publisher: { '@id': ORG_ID },
        }],
    };
}

/** "Cesantías: Reconocimiento y Sanción Moratoria" -> "Cesantías". */
function baseName(heading: string): string {
    return heading.split(':')[0].trim();
}

function truncate(text: string, max = 155): string {
    if (text.length <= max) return text;
    const cut = text.slice(0, max - 1);
    return cut.slice(0, cut.lastIndexOf(' ')).replace(/[.,;:\s]+$/, '') + '…';
}

function normalize(path: string): string {
    const clean = path.split('?')[0].split('#')[0];
    return clean.length > 1 ? clean.replace(/\/+$/, '') : clean || '/';
}

function absoluteUrl(path: string): string {
    return /^https?:\/\//.test(path) ? path : `${SITE_ORIGIN}/${path.replace(/^\//, '')}`;
}
