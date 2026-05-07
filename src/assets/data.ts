import type { BlogType, CaseStudyType, FooterContactType, FooterLinkType, MemberType, ServiceType, TestimonialType } from "@/types";

export const teamMembers: MemberType[] = [
    {
        name: 'Allison Daniela Rivera Ardila',
        image: 'assets/img/team/daniela.png',
        role: 'Abogada Coordinadora',
        specialty: 'Especialista en Derecho Administrativo',
        linkedin: 'https://www.linkedin.com/in/allison-daniela-rivera-ardila-3a9364298',
    },
    {
        name: 'Jorge Alberto Vera Villamizar',
        image: 'assets/img/team/Jorge.jpg',
        role: 'Socio Director',
        specialty: 'Especialista en Seguridad Social',
        linkedin: 'https://www.linkedin.com/in/jorge-alberto-vera-villamizar-0113b9137/',
    },
    {
        name: 'Jairo Enrique Silva Santamaría',
        image: 'assets/img/team/daniela2.png',
        role: 'Socio Senior',
        specialty: 'Especialista en Derecho Público',
    },
]

export const blogs: BlogType[] = [
    {
        id: 1,
        title: 'La Reforma Pensional: ¿Cómo afecta su futuro?',
        image: 'assets/img/blog/blog1-img1.png',
        name: 'Vera Villamizar',
        date: '15 Diciembre 2024',
        duration: 1200,
    },
    {
        id: 2,
        title: 'Nulidad de Traslados de Fondo de Pensiones',
        image: 'assets/img/blog/blog1-img2.png',
        name: 'Vera Villamizar',
        date: '10 Diciembre 2024',
        duration: 1000,
    },
    {
        id: 3,
        title: 'Estabilidad Laboral Reforzada: Sus Derechos',
        image: 'assets/img/blog/blog1-img3.png',
        name: 'Vera Villamizar',
        date: '05 Diciembre 2024',
        duration: 800,
    },
    {
        id: 4,
        title: 'Requisitos para la Pensión de Vejez en Colombia',
        image: 'assets/img/blog/blog1-image4.png',
        name: 'Vera Villamizar',
        date: '01 Diciembre 2024'
    },
    {
        id: 5,
        title: 'Despidos Injustificados: ¿Qué hacer?',
        image: 'assets/img/blog/blog1-image5.png',
        name: 'Vera Villamizar',
        date: '28 Noviembre 2024'
    },
    {
        id: 6,
        title: 'El Contrato de Trabajo y sus Modalidades',
        image: 'assets/img/blog/blog1-image6.png',
        name: 'Vera Villamizar',
        date: '20 Noviembre 2024'
    },
    {
        id: 7,
        title: 'Pensiones de Invalidez: Trámites y Requisitos',
        image: 'assets/img/blog/blog1-image7.png',
        name: 'Vera Villamizar',
        date: '15 Noviembre 2024'
    },
    {
        id: 8,
        title: 'Acoso Laboral: Identificación y Defensa',
        image: 'assets/img/blog/blog1-image8.png',
        name: 'Vera Villamizar',
        date: '10 Noviembre 2024'
    },
    {
        id: 9,
        title: 'Derechos en la Liquidación Laboral',
        image: 'assets/img/blog/blog1-image9.png',
        name: 'Vera Villamizar',
        date: '05 Noviembre 2024'
    }
];

export const servicesData: ServiceType[] = [
    {
        id: 1,
        icon2: 'assets/img/icons/service4-icon1.svg',
        icon: 'assets/img/icons/service1-icon1.svg',
        title: 'Reconocimiento de Pensiones',
        description: 'Tramitamos tu pensión en Colpensiones y fondos privados con respaldo legal y agilidad, maximizando tu beneficio.',
    },
    {
        id: 2,
        icon2: 'assets/img/icons/service4-icon2.svg',
        icon: 'assets/img/icons/service1-icon2.svg',
        title: 'Docentes Afiliados al FOMAG',
        description: 'Reconocimiento pensional docente régimen 2277, contabilizando la totalidad de los tiempos laborados y factores salariales devengados.',
    },
    {
        id: 3,
        icon2: 'assets/img/icons/service4-icon3.svg',
        icon: 'assets/img/icons/service1-icon3.svg',
        title: 'Docentes 1278 como 2277',
        description: 'Analizamos la transición pensional de Docentes 1278 como docentes 2277, buscando la compatibilidad entre salario y pensión.',
    },
    {
        id: 4,
        icon2: 'assets/img/icons/service4-icon4.svg',
        icon: 'assets/img/icons/service1-icon4.svg',
        title: 'Pensión por Muerte',
        description: 'Defendemos el reconocimiento de la pensión de sobrevivientes y sustituciones pensionales con respaldo legal.',
    },
    {
        id: 5,
        icon2: 'assets/img/icons/service4-icon5.svg',
        icon: 'assets/img/icons/service1-icon5.svg',
        title: 'Pensión de Invalidez',
        description: 'Gestionamos pensión por invalidez desde la calificación hasta el reconocimiento, garantizando todos tus derechos.',
    },
    {
        id: 6,
        icon2: 'assets/img/icons/service4-icon6.svg',
        icon: 'assets/img/icons/service1-icon6.svg',
        title: 'Indemnizaciones / Devolución de Saldos',
        description: 'Recupera saldos o indemnizaciones pensionales sin perder dinero con asesoría legal especializada.',
    },
    {
        id: 7,
        icon2: 'assets/img/icons/service4-icon1.svg',
        icon: 'assets/img/icons/service1-icon7.svg',
        title: 'Reliquidación de Pensiones',
        description: 'Recalculamos tu pensión para aumentar ingresos de forma legal, revisando todos los factores salariales aplicables.',
    },
    {
        id: 8,
        icon2: 'assets/img/icons/service4-icon2.svg',
        icon: 'assets/img/icons/service1-icon8.svg',
        title: 'Bonificación 383',
        description: 'Gestionamos el reconocimiento de la bonificación del Decreto 383 para empleados de la Rama Judicial, Policía y Fiscalía.',
    },
    {
        id: 9,
        icon2: 'assets/img/icons/service4-icon3.svg',
        icon: 'assets/img/icons/service1-icon9.svg',
        title: 'Cesantías',
        description: 'Tramitamos reconocimiento de cesantías y reclamamos sanción moratoria por pago tardío con resultados efectivos.',
    },
    {
        id: 10,
        icon2: 'assets/img/icons/service4-icon4.svg',
        icon: 'assets/img/icons/service1-icon1.svg',
        title: 'Seguros por Muerte e Invalidez',
        description: 'Reclamamos seguros por fallecimiento y por invalidez con acompañamiento total durante todo el proceso.',
    },
    {
        id: 11,
        icon2: 'assets/img/icons/service4-icon5.svg',
        icon: 'assets/img/icons/service1-icon2.svg',
        title: 'Accidentes de Tránsito',
        description: 'Reclamamos indemnizaciones por accidentes viales eficazmente, defendiendo tus derechos frente a aseguradoras.',
    },
    {
        id: 12,
        icon2: 'assets/img/icons/service4-icon6.svg',
        icon: 'assets/img/icons/service1-icon3.svg',
        title: 'Indemnización por Falla Médica',
        description: 'Demandamos fallas en salud buscando indemnización justa para víctimas de negligencia médica.',
    },
]

export const caseStudies: CaseStudyType[] = [
    {
        image: 'assets/img/others/case2-image1.png',
        category: 'Derecho Pensional',
        title: 'Recuperación de Semanas',
    },
    {
        image: 'assets/img/others/case2-image2.png',
        category: 'Derecho Laboral',
        title: 'Reintegro Laboral Exitoso',
    },
    {
        image: 'assets/img/others/case2-image3.png',
        category: 'Administrativo',
        title: 'Nulidad y Restablecimiento',
    },
    {
        image: 'assets/img/others/case2-image1.png',
        category: 'Casación',
        title: 'Fallo a Favor en Corte',
    },
    {
        image: 'assets/img/others/case2-image2.png',
        category: 'Pensiones',
        title: 'Reconocimiento Pensional',
    },
    {
        image: 'assets/img/others/case2-image3.png',
        category: 'Laboral',
        title: 'Indemnización por Despido',
    },
];

export const TestimonialSlides: TestimonialType[] = [
    {
        name: "Carlos Méndez",
        image: "assets/img/testimonial/tes1-author1.png",
        role: "Cliente Satisfecho",
        message: "“Gracias a Vera Villamizar Abogados logré recuperar mi pensión. Su equipo demostró un profesionalismo increíble y me acompañaron en cada paso del proceso legal con total transparencia.”"
    },
    {
        name: "Ana Lucía Torres",
        image: "assets/img/testimonial/tes1-author2.png",
        role: "Cliente Pensionada",
        message: "“Excelente servicio. Me ayudaron con la nulidad de mi traslado de fondo y pude regresar a Colpensiones. Estoy muy agradecida por su compromiso y dedicación.”"
    },
    {
        name: "Jorge Ramírez",
        image: "assets/img/testimonial/tes1-author3.png",
        role: "Empresario",
        message: "“Como empresa, confiamos en ellos para toda nuestra asesoría laboral. Nos han evitado muchos problemas legales gracias a su gestión preventiva. Altamente recomendados.”"
    },
    {
        name: "Marta Gómez",
        image: "assets/img/testimonial/tes1-author4.png",
        role: "Cliente Laboral",
        message: "“Lograron mi reintegro laboral después de un despido injusto. Son abogados que realmente saben lo que hacen y luchan por los derechos de sus clientes.”"
    },
    {
        name: "Pedro Sánchez",
        image: "assets/img/testimonial/tes1-author5.png",
        role: "Cliente",
        message: "“La atención personalizada y el conocimiento profundo de la ley que tienen es impresionante. Me sentí respaldado en todo momento durante mi demanda.”"
    },
    {
        name: "Luisa Fernández",
        image: "assets/img/testimonial/tes1-author6.png",
        role: "Cliente",
        message: "“Rapidez y efectividad. Solucionaron mi caso administrativo en menos tiempo del esperado. Son sin duda los mejores abogados de la región.”"
    }
]

export const testimonials: TestimonialType[] = [
    {
        message:
            '“Gracias al equipo de Vera Villamizar pude resolver mi situación pensional. Su asesoría fue clara y efectiva desde el primer día.”',
        name: 'Roberto Gómez',
        image: 'assets/img/testimonial/tes2-author1.png',
        role: 'Pensionado',
    },
    {
        message:
            '“Profesionalismo y ética. Me representaron en una demanda laboral compleja y obtuvimos un resultado favorable. Muy recomendados.”',
        name: 'Patricia Díaz',
        image: 'assets/img/testimonial/tes2-author2.png',
        role: 'Gerente Comercial',
    },
    {
        message:
            '“Tenía dudas sobre mi liquidación y ellos me aclararon todo el panorama. Gracias a su intervención recibí lo justo.”',
        name: 'Fernando Ruiz',
        image: 'assets/img/testimonial/tes2-author3.png',
        role: 'Ingeniero',
    },
    {
        message:
            '“Expertos en nulidad de traslados. Lograron lo que otros abogados me decían que era imposible. Eternamente agradecida.”',
        name: 'Gloria Estupiñán',
        image: 'assets/img/testimonial/tes2-author1.png',
        role: 'Docente',
    },
    {
        message:
            '“Su acompañamiento en mi proceso de invalidez fue fundamental. Humanidad y servicio al cliente de primera calidad.”',
        name: 'Héctor Buitrago',
        image: 'assets/img/testimonial/tes2-author2.png',
        role: 'Independiente',
    },
    {
        message:
            '“La mejor firma de abogados en Santander. Seriedad, cumplimiento y resultados reales para sus clientes.”',
        name: 'Sofía Vergara',
        image: 'assets/img/testimonial/tes2-author3.png',
        role: 'Comerciante',
    },
];

export const instagramFeed: string[] = [
    'assets/img/blog-posts/instagram-feed-1.png',
    'assets/img/blog-posts/instagram-feed-2.png',
    'assets/img/blog-posts/instagram-feed-3.png',
    'assets/img/blog-posts/instagram-feed-4.png',
    'assets/img/blog-posts/instagram-feed-5.png',
    'assets/img/blog-posts/instagram-feed-6.png'
];

export const quickLinks: FooterLinkType[] = [
    { label: 'Nosotros', url: '/about' },
    { label: 'Servicios', url: '/services' },
    { label: 'Casos de Éxito', url: '' },
    { label: 'Planes', url: '' },
    { label: 'Contáctenos', url: '/contact' },
];

export const contactItems: FooterContactType[] = [
    {
        icon: 'assets/img/icons/footer1-icon1.svg',
        text: '+57 315 718 9078',
        href: 'https://api.whatsapp.com/send?phone=573157189078',
    },
    {
        icon: 'assets/img/icons/footer1-icon2.svg',
        text: 'Calle 36 #13-48, García Rovira, Bucaramanga',
        href: 'https://maps.google.com/?q=Vera+Villamizar+Abogados+SAS+Bucaramanga',
    },
    {
        icon: 'assets/img/icons/footer1-icon3.svg',
        text: 'veravillamizarabogados@gmail.com',
        href: 'mailto:veravillamizarabogados@gmail.com',
    },
    {
        icon: 'assets/img/icons/footer1-icon1.svg',
        text: 'Lun – Vie: 8:00 AM – 4:00 PM',
        href: '',
    },
];