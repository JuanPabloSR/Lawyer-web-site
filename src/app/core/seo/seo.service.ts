import { siteConfig } from '@/assets/site-config';
import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type BreadcrumbItem = { name: string; path: string };

export type SeoData = {
    /** Título de la pestaña y de Google. Si no incluye el nombre de la firma, se le agrega. */
    title: string;
    description: string;
    /** Ruta canónica (p. ej. "/about"). Si falta se usa la URL actual. */
    canonicalPath?: string;
    /** Imagen para redes sociales (ruta relativa o absoluta). */
    image?: string;
    type?: 'website' | 'article';
    /** Páginas que no deben aparecer en Google (404, borradores, duplicados). */
    noindex?: boolean;
    breadcrumbs?: BreadcrumbItem[];
    /** Datos estructurados adicionales de la página (FAQPage, Service, BlogPosting...). */
    jsonLd?: object[];
};

export const SITE_ORIGIN = 'https://www.veravillamizarabogados.com';
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
const DEFAULT_IMAGE = '/assets/img/og/og-vera-villamizar.jpg';

/** Aplica el SEO de cada página: título, descripción, canonical, Open Graph, Twitter, robots y JSON-LD. */
@Injectable({ providedIn: 'root' })
export class SeoService {
    private doc = inject(DOCUMENT);
    private title = inject(Title);
    private meta = inject(Meta);

    apply(seo: SeoData, currentPath: string) {
        const brand = siteConfig.titleSuffix.replace(/^\s*\|\s*/, '');
        const fullTitle = seo.title.includes(brand) ? seo.title : seo.title + siteConfig.titleSuffix;
        const url = this.absolute(seo.canonicalPath ?? currentPath);
        const image = this.absolute(seo.image ?? DEFAULT_IMAGE);

        this.title.setTitle(fullTitle);
        this.setName('description', seo.description);
        this.setName('robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1');

        this.setProperty('og:type', seo.type ?? 'website');
        this.setProperty('og:url', url);
        this.setProperty('og:title', fullTitle);
        this.setProperty('og:description', seo.description);
        this.setProperty('og:image', image);
        this.setProperty('og:image:alt', fullTitle);
        this.setProperty('og:locale', 'es_CO');
        this.setProperty('og:site_name', 'Vera Villamizar Abogados');

        this.setName('twitter:card', 'summary_large_image');
        this.setName('twitter:title', fullTitle);
        this.setName('twitter:description', seo.description);
        this.setName('twitter:image', image);

        this.setCanonical(url);
        this.setJsonLd(this.buildJsonLd(seo, url));
    }

    private absolute(path: string): string {
        if (/^https?:\/\//.test(path)) return path;
        const clean = path.split('?')[0].split('#')[0];
        const normalized = clean.length > 1 ? clean.replace(/\/+$/, '') : clean;
        return SITE_ORIGIN + (normalized.startsWith('/') ? normalized : '/' + normalized);
    }

    private setName(name: string, content: string) {
        this.meta.updateTag({ name, content });
    }

    private setProperty(property: string, content: string) {
        this.meta.updateTag({ property, content });
    }

    private setCanonical(url: string) {
        let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!link) {
            link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }

    private buildJsonLd(seo: SeoData, url: string): object[] {
        const graph: object[] = [];
        if (seo.breadcrumbs?.length) {
            graph.push({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: seo.breadcrumbs.map((b, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: b.name,
                    item: this.absolute(b.path),
                })),
            });
        }
        graph.push({ '@context': 'https://schema.org', '@type': 'WebPage', '@id': url + '#webpage', url, name: seo.title, description: seo.description, inLanguage: 'es-CO', isPartOf: { '@id': SITE_ORIGIN + '/#website' }, about: { '@id': ORG_ID } });
        return graph.concat(seo.jsonLd ?? []);
    }

    private setJsonLd(items: object[]) {
        let script = this.doc.getElementById('seo-jsonld') as HTMLScriptElement | null;
        if (!script) {
            script = this.doc.createElement('script');
            script.id = 'seo-jsonld';
            script.type = 'application/ld+json';
            this.doc.head.appendChild(script);
        }
        script.textContent = JSON.stringify(items);
    }
}
