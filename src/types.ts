export type HeroSliderType = {
    title: string;
    description: string;
    image: string;
}

/** Contenido de la vista de detalle de servicio (/service-details/:slug). */
export type ServiceDetailType = {
    slug: string;
    heading: string;
    intro: string[];
    points: string[];
    approachHeading: string;
    approach: string[];
    /** Muestra las preguntas frecuentes (hoy son de temas pensionales). */
    showFaq?: boolean;
}

export type ServiceType = {
    /** Si existe, las tarjetas enlazan a /service-details/:slug */
    slug?: string;
    icon: string;
    icon2?: string;
    title: string;
    image?: string;
    description?: string;
    id: number;
}

export type WorkStepType = {
    image: string;
    id: number;
    title: string;
    description: string;
}

export type MemberType = {
    name: string;
    image: string;
    role: string;
    specialty?: string;
    linkedin?: string;
    /** Hoja de vida en PDF (ruta bajo assets/documents). Si falta, no se muestra el botón de descarga. */
    cv?: string;
}

export type TestimonialType = {
    message: string;
    /** El autor es una empresa: `image` es su logo, no una foto. */
    isCompany?: boolean;
    /** Logo claro sobre transparente: se muestra sobre recuadro oscuro. */
    onDark?: boolean;
} & MemberType

export type AlliedCompanyType = {
    name: string;
    logo: string;
    alt: string;
    /** Logo claro sobre transparente: se muestra sobre recuadro oscuro. */
    onDark?: boolean;
    /** Mensaje provisional para el testimonio. Reemplazar por el texto de la propia empresa. */
    testimonial: string;
}

/** Contenido de la vista de detalle de un artículo (/blog-details/:slug). */
export type BlogDetailType = {
    slug: string;
    heading: string;
    intro: string[];
    sectionHeading: string;
    section: string[];
    points: string[];
    closingHeading: string;
    closing: string;
}

export type BlogType = {
    /** Si existe, la tarjeta enlaza a /blog-details/:slug */
    slug?: string;
    id: number;
    title?: string;
    image: string;
    name: string;
    description?: string;
    date: string;
    duration?: number
}

export type CaseStudyType = {
    image: string;
    category: string;
    title: string;
    /** Si existe, la tarjeta enlaza a /case-single/:slug */
    slug?: string;
}

/** Contenido de la vista de caso único (/case-single/:slug). */
export type CaseDetailType = CaseStudyType & {
    slug: string;
    /** Foto de portada del detalle. Si falta se usa `image`, recortada a 4:3. */
    heroImage?: string;
    /** Solo aparece en las tarjetas del inicio, no en /case-study. */
    homeOnly?: boolean;
    heading: string;
    intro: string[];
    strategy: string[];
    benefits: string[];
    result: string;
}

export type FooterLinkType = {
    label: string;
    url: string;
}

export type FooterContactType= {
    icon: string;
    text: string;
    href: string;
}