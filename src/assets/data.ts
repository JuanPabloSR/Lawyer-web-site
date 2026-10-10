import type { AlliedCompanyType, BlogDetailType, ServiceDetailType, BlogType, CaseDetailType, CaseStudyType, FooterContactType, FooterLinkType, MemberType, ServiceType, TestimonialType } from "@/types";

export { siteConfig } from './site-config';

export const teamMembers: MemberType[] = [
    {
        name: 'ALLISON DANIELA RIVERA ARDILA',
        image: 'assets/img/new_photos_web_allyson/IMG_4464.webp',
        role: 'ABOGADA COORDINADORA',
        specialty: 'ESPECIALISTA EN DERECHO ADMINISTRATIVO.',
        linkedin: 'https://www.linkedin.com/in/allison-daniela-rivera-ardila-3a9364298?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    },
    {
        name: 'JORGE ALBERTO VERA VILLAMIZAR',
        image: 'assets/img/new_photos_web_jorge/IMG_4620.webp',
        role: 'SOCIO DIRECTOR',
        specialty: 'ESPECIALISTA EN SEGURIDAD SOCIAL',
        linkedin: 'https://www.linkedin.com/in/jorge-alberto-vera-villamizar-0113b9137/',
    },
    {
        name: 'JAIRO ENRIQUE SILVA SANTAMARIA',
        image: 'assets/img/others/cta3-image.png',
        role: 'SOCIO SENIOR',
        specialty: 'ESPECIALISTA EN DERECHO PUBLICO',
    },
]

export const blogs: BlogType[] = [
    {
        id: 1,
        slug: 'reforma-pensional',
        title: 'La Reforma Pensional: ¿Cómo afecta su futuro?',
        image: 'assets/img/blog/blog-abogados-1.webp',
        name: 'Vera Villamizar',
        date: '15 Diciembre 2024',
        duration: 1200,
    },
    {
        id: 2,
        slug: 'nulidad-de-traslados',
        title: 'Nulidad de Traslados de Fondo de Pensiones',
        image: 'assets/img/blog/blog-abogados-2.webp',
        name: 'Vera Villamizar',
        date: '10 Diciembre 2024',
        duration: 1000,
    },
    {
        id: 3,
        slug: 'estabilidad-laboral-reforzada',
        title: 'Estabilidad Laboral Reforzada: Sus Derechos',
        image: 'assets/img/blog/blog-abogados-3.webp',
        name: 'Vera Villamizar',
        date: '05 Diciembre 2024',
        duration: 800,
    },
    {
        id: 4,
        slug: 'requisitos-pension-de-vejez',
        title: 'Requisitos para la Pensión de Vejez en Colombia',
        image: 'assets/img/blog/blog-abogados-4.webp',
        name: 'Vera Villamizar',
        date: '01 Diciembre 2024'
    },
    {
        id: 5,
        slug: 'despidos-injustificados',
        title: 'Despidos Injustificados: ¿Qué hacer?',
        image: 'assets/img/blog/blog-abogados-5.webp',
        name: 'Vera Villamizar',
        date: '28 Noviembre 2024'
    },
    {
        id: 6,
        slug: 'contrato-de-trabajo',
        title: 'El Contrato de Trabajo y sus Modalidades',
        image: 'assets/img/blog/blog-abogados-6.webp',
        name: 'Vera Villamizar',
        date: '20 Noviembre 2024'
    },
    {
        id: 7,
        slug: 'pensiones-de-invalidez',
        title: 'Pensiones de Invalidez: Trámites y Requisitos',
        image: 'assets/img/blog/blog-abogados-7.webp',
        name: 'Vera Villamizar',
        date: '15 Noviembre 2024'
    },
    {
        id: 8,
        slug: 'acoso-laboral',
        title: 'Acoso Laboral: Identificación y Defensa',
        image: 'assets/img/blog/blog-abogados-8.webp',
        name: 'Vera Villamizar',
        date: '10 Noviembre 2024'
    },
    {
        id: 9,
        slug: 'liquidacion-laboral',
        title: 'Derechos en la Liquidación Laboral',
        image: 'assets/img/blog/blog-abogados-9.webp',
        name: 'Vera Villamizar',
        date: '05 Noviembre 2024'
    }
];

export const servicesData: ServiceType[] = [
    {
        id: 1,
        slug: 'reconocimiento-de-pensiones',
        icon2: 'assets/img/icons/service4-icon1.svg',
        icon: 'assets/img/icons/service1-icon1.svg',
        title: 'RECONOCIMIENTO DE PENSIONES',
        description: 'Tramitamos tu pensión en Colpensiones y fondos privados con respaldo legal y agilidad, maximizando tu beneficio.',
    },
    {
        id: 2,
        slug: 'docentes-afiliados-al-fomag',
        icon2: 'assets/img/icons/service4-icon2.svg',
        icon: 'assets/img/icons/service1-icon2.svg',
        title: 'DOCENTES AFILIADOS AL FOMAG',
        description: 'Reconocimiento pensional docente régimen 2277 sin complicaciones, contabilizando la totalidad de los tiempos laborados y factores salariales efectivamente devengados.',
    },
    {
        id: 3,
        slug: 'docentes-1278-como-2277',
        icon2: 'assets/img/icons/service4-icon3.svg',
        icon: 'assets/img/icons/service1-icon3.svg',
        title: 'DOCENTES 1278 COMO 2277',
        description: 'Analizamos la transición pensional de Docentes 1278 como docentes 2277 para mejorar tu pensión, buscando compatibilidad entre Salario y Pensión.',
    },
    {
        id: 4,
        slug: 'pensiones-por-muerte',
        icon2: 'assets/img/icons/service4-icon4.svg',
        icon: 'assets/img/icons/service1-icon4.svg',
        title: 'PENSIONES POR MUERTE',
        description: 'Defendemos el reconocimiento de la pensión de sobrevivientes y sustituciones con respaldo legal.',
    },
    {
        id: 5,
        slug: 'pensiones-de-invalidez',
        icon2: 'assets/img/icons/service4-icon5.svg',
        icon: 'assets/img/icons/service1-icon5.svg',
        title: 'PENSIONES DE INVALIDEZ',
        description: 'Gestionamos pensión por invalidez garantizando tus derechos, desde la calificación de invalidez hasta el reconocimiento.',
    },
    {
        id: 6,
        slug: 'devolucion-de-saldos',
        icon2: 'assets/img/icons/service4-icon6.svg',
        icon: 'assets/img/icons/service1-icon6.svg',
        title: 'DEVOLUCIÓN DE SALDOS',
        description: 'Recupera saldos o indemnizaciones pensionales sin perder dinero.',
    },
    {
        id: 7,
        slug: 'reliquidacion-de-pensiones',
        icon2: 'assets/img/icons/service4-icon1.svg',
        icon: 'assets/img/icons/service1-icon7.svg',
        title: 'RELIQUIDACIÓN DE PENSIONES',
        description: 'Recalculamos tu pensión para aumentar ingresos de forma legal.',
    },
    {
        id: 8,
        slug: 'bonificacion-383',
        icon2: 'assets/img/icons/service4-icon2.svg',
        icon: 'assets/img/icons/service1-icon8.svg',
        title: 'BONIFICACIÓN 383',
        description: 'Gestionamos el reconocimiento de la bonificación del Decreto 383 para empleados de la Rama Judicial, Procuraduría y Fiscalía.',
    },
    {
        id: 9,
        slug: 'cesantias',
        icon2: 'assets/img/icons/service4-icon3.svg',
        icon: 'assets/img/icons/service1-icon9.svg',
        title: 'CESANTÍAS',
        description: 'Tramitamos reconocimiento de cesantías sin demoras y reclamamos sanción moratoria por pago tardío.',
    },
    {
        id: 10,
        slug: 'seguros-por-muerte',
        icon2: 'assets/img/icons/service4-icon4.svg',
        icon: 'assets/img/icons/service1-icon1.svg',
        title: 'SEGUROS POR MUERTE',
        description: 'Reclamamos seguros por fallecimiento y por invalidez con acompañamiento total.',
    },
    {
        id: 11,
        slug: 'accidentes-de-transito',
        icon2: 'assets/img/icons/service4-icon5.svg',
        icon: 'assets/img/icons/service1-icon2.svg',
        title: 'ACCIDENTES DE TRÁNSITO',
        description: 'Reclamamos indemnizaciones por accidentes viales eficazmente.',
    },
    {
        id: 12,
        slug: 'falla-medica',
        icon2: 'assets/img/icons/service4-icon6.svg',
        icon: 'assets/img/icons/service1-icon3.svg',
        title: 'FALLA MÉDICA',
        description: 'Demandamos fallas en salud buscando indemnización justa.',
    },
    // Pedidos por el abogado el 2026-10-09. Descripciones provisionales: reemplazar por el texto del cliente.
    {
        id: 13,
        slug: 'demandas-laborales',
        icon2: 'assets/img/icons/service4-icon1.svg',
        icon: 'assets/img/icons/service1-icon4.svg',
        title: 'DEMANDAS LABORALES',
        description: 'Representamos a trabajadores y empresas en procesos laborales, desde la reclamación inicial hasta la sentencia, con una defensa técnica y estratégica.',
    },
    {
        id: 14,
        slug: 'asesorias-empresariales',
        icon2: 'assets/img/icons/service4-icon2.svg',
        icon: 'assets/img/icons/service1-icon3.svg',
        title: 'ASESORÍAS EMPRESARIALES',
        description: 'Orientamos a las empresas en temas laborales y de seguridad social con asesoría preventiva y acompañamiento personalizado.',
    },
    {
        id: 15,
        slug: 'capacitaciones',
        icon2: 'assets/img/icons/service4-icon3.svg',
        icon: 'assets/img/icons/service1-icon2.svg',
        title: 'CAPACITACIONES',
        description: 'Capacitamos a empresas y equipos de trabajo en derecho laboral y seguridad social, con contenido claro y práctico.',
    },
]

/*
 * Detalle de cada servicio (/service-details/:slug). Mismo `slug` que en servicesData.
 * TEXTO TEMPORAL redactado a partir de las descripciones reales de info.md: reemplazar por el
 * texto del cliente cuando lo entregue. Sin cifras, plazos ni resultados garantizados.
 * `defaultServiceDetail` es el texto original de la página (/service-details sin servicio).
 */
export const defaultServiceDetail: ServiceDetailType = {
    slug: '',
    heading: 'Planeación Pensional y Defensa Laboral',
    intro: [
        'En el complejo panorama normativo de Colombia, asegurar su futuro requiere decisiones informadas y una estrategia legal sólida. Nuestros servicios de Asesoría Pensional y Laboral están diseñados para proteger su patrimonio, garantizar el reconocimiento de sus derechos adquiridos y brindarle la tranquilidad que merece ante Colpensiones y los Fondos Privados.',
    ],
    points: [
        'Análisis de Historia Laboral',
        'Cálculo Actuarial Especializado',
        'Representación ante Colpensiones',
        'Trámites en Fondos Privados (AFP)',
        'Demandas Ordinarias Laborales',
        'Asesoría Preventiva',
    ],
    approachHeading: 'Litigio Estratégico y Soluciones a la Medida',
    approach: [
        'Cada historia laboral es única y presenta desafíos específicos. No creemos en demandas genéricas; en su lugar, aplicamos un enfoque de Litigio Estratégico Personalizado para maximizar sus probabilidades de éxito. Analizamos a fondo su historia laboral, cotizaciones y contratos para identificar las mejores oportunidades legales.',
        'Combinamos un profundo conocimiento de la jurisprudencia actual con un análisis probatorio riguroso. Ya sea que busque la nulidad de su traslado de fondo, el reintegro laboral o el pago de prestaciones sociales, nuestra firma traza la ruta jurídica más efectiva para restablecer sus derechos vulnerados.',
    ],
    showFaq: true,
};

export const serviceDetails: ServiceDetailType[] = [
    {
        slug: 'reconocimiento-de-pensiones',
        heading: 'Reconocimiento de Pensiones: Tu Derecho, Bien Tramitado',
        intro: [
            'Tramitamos tu pensión ante Colpensiones y los fondos privados con respaldo legal y agilidad, para maximizar tu beneficio.',
            'Revisamos tu historia laboral, las semanas cotizadas y el régimen que te aplica, y presentamos la solicitud con los soportes necesarios.',
        ],
        points: ['Estudio de la Historia Laboral', 'Verificación de Semanas Cotizadas', 'Definición del Régimen Aplicable', 'Solicitud ante Colpensiones o Fondo Privado', 'Recursos si la Entidad Niega o Demora', 'Acompañamiento hasta el Reconocimiento'],
        approachHeading: 'Una Estrategia a la Medida de tu Caso',
        approach: [
            'Si la entidad niega la pensión o la reconoce de forma incompleta, presentamos los recursos y, cuando es necesario, acudimos a la acción de tutela o al proceso ordinario laboral.',
            'Cada caso se sustenta con soportes documentales y con la jurisprudencia vigente de las Altas Cortes.',
        ],
        showFaq: true,
    },
    {
        slug: 'docentes-afiliados-al-fomag',
        heading: 'Docentes Afiliados al FOMAG: Pensión Docente sin Complicaciones',
        intro: [
            'Logramos el reconocimiento pensional docente del régimen 2277, contabilizando la totalidad de los tiempos laborados y los factores salariales efectivamente devengados.',
            'Los docentes afiliados al Fondo Nacional de Prestaciones Sociales del Magisterio (FOMAG) tienen reglas propias; las conocemos y las aplicamos a cada caso.',
        ],
        points: ['Régimen Docente 2277', 'Suma de Todos los Tiempos Laborados', 'Factores Salariales Devengados', 'Solicitud ante el FOMAG', 'Reclamación y Recursos', 'Demanda Contencioso Administrativa'],
        approachHeading: 'Defendemos el Valor Completo de tu Pensión',
        approach: [
            'Verificamos que la entidad no deje por fuera tiempos de servicio ni factores salariales que hacen parte de tu pensión.',
            'Si la respuesta es negativa o incompleta, llevamos el caso ante la jurisdicción de lo contencioso administrativo con una defensa técnica y documentada.',
        ],
        showFaq: true,
    },
    {
        slug: 'docentes-1278-como-2277',
        heading: 'Docentes 1278 como 2277: Analiza tu Transición Pensional',
        intro: [
            'Analizamos la transición pensional de docentes del régimen 1278 como docentes del 2277 para mejorar tu pensión, buscando la compatibilidad entre el salario y la pensión.',
            'Estudiamos tu fecha de vinculación y tu historia como docente para saber si esta vía te conviene.',
        ],
        points: ['Estudio de tu Vinculación Docente', 'Análisis de la Transición', 'Compatibilidad entre Salario y Pensión', 'Comparación de Beneficios', 'Reclamación ante la Entidad', 'Representación Judicial'],
        approachHeading: 'Decisiones Informadas, Sin Improvisar',
        approach: [
            'Antes de reclamar, evaluamos con claridad los alcances de cada régimen para que decidas con información.',
            'Cuando procede, presentamos la reclamación y sostenemos el caso hasta las instancias necesarias.',
        ],
        showFaq: true,
    },
    {
        slug: 'pensiones-por-muerte',
        heading: 'Pensiones por Muerte: Sobrevivientes y Sustituciones',
        intro: [
            'Defendemos el reconocimiento de la pensión de sobrevivientes y de las sustituciones pensionales con respaldo legal.',
            'En un momento difícil, nos encargamos de los trámites para que tu familia reciba lo que le corresponde.',
        ],
        points: ['Identificación de Beneficiarios', 'Pensión de Sobrevivientes', 'Sustitución Pensional', 'Verificación de Requisitos', 'Reclamación ante la Entidad', 'Proceso Judicial si es Negada'],
        approachHeading: 'Acompañamiento Cercano y Claro',
        approach: [
            'Reunimos los documentos que acreditan el vínculo y el derecho de cada beneficiario y presentamos la solicitud completa.',
            'Si la entidad la niega, interponemos los recursos y acudimos a la vía judicial cuando es necesario.',
        ],
        showFaq: true,
    },
    {
        slug: 'pensiones-de-invalidez',
        heading: 'Pensiones de Invalidez: Desde la Calificación hasta el Reconocimiento',
        intro: [
            'Gestionamos la pensión por invalidez garantizando tus derechos, y te acompañamos desde la calificación de invalidez hasta el reconocimiento de la pensión.',
            'Revisamos el dictamen y tu historia laboral para definir el mejor camino.',
        ],
        points: ['Orientación sobre la Calificación', 'Revisión del Dictamen', 'Controversia del Dictamen cuando Procede', 'Solicitud de la Pensión', 'Recursos ante la Entidad', 'Representación Judicial'],
        approachHeading: 'Cada Detalle Médico y Legal Cuenta',
        approach: [
            'El porcentaje y el origen de la pérdida de capacidad laboral inciden en el derecho; por eso estudiamos con cuidado cada documento.',
            'Si es necesario, controvertimos el dictamen y llevamos el caso a la jurisdicción competente.',
        ],
        showFaq: true,
    },
    {
        slug: 'devolucion-de-saldos',
        heading: 'Devolución de Saldos e Indemnizaciones Pensionales',
        intro: [
            'Te ayudamos a recuperar saldos o indemnizaciones pensionales sin perder dinero.',
            'Analizamos tu situación para saber qué te corresponde cuando no alcanzas los requisitos de la pensión.',
        ],
        points: ['Estudio de tu Situación Pensional', 'Devolución de Saldos', 'Indemnización Sustitutiva', 'Cálculo del Valor', 'Trámite ante el Fondo', 'Seguimiento hasta el Pago'],
        approachHeading: 'Recupera lo que es Tuyo',
        approach: [
            'Verificamos los aportes y calculamos el valor que debe reconocerse, para que no te entreguen menos de lo debido.',
            'Presentamos la solicitud y, si hay negativa o demora, acudimos a los recursos y a la vía judicial.',
        ],
        showFaq: true,
    },
    {
        slug: 'reliquidacion-de-pensiones',
        heading: 'Reliquidación de Pensiones: Recalculamos tu Pensión',
        intro: [
            'Recalculamos tu pensión para aumentar tus ingresos de forma legal.',
            'Revisamos cómo se liquidó tu pensión y si se tuvieron en cuenta todos los factores y semanas que correspondían.',
        ],
        points: ['Revisión del Cálculo Original', 'Factores Salariales Omitidos', 'Semanas y Tiempos Cotizados', 'Reclamación de la Reliquidación', 'Demanda cuando Procede', 'Cobro del Retroactivo'],
        approachHeading: 'Una Pensión Calculada como Debe Ser',
        approach: [
            'Comparamos lo reconocido con lo que dice la ley y los soportes de tu historia laboral.',
            'Si encontramos diferencias a tu favor, las reclamamos ante la entidad y, de ser necesario, ante los jueces.',
        ],
        showFaq: true,
    },
    {
        slug: 'bonificacion-383',
        heading: 'Bonificación 383: Reconocimiento para Servidores Judiciales',
        intro: [
            'Gestionamos el reconocimiento de la bonificación del Decreto 383 para empleados de la Rama Judicial, la Procuraduría y la Fiscalía, con un enfoque efectivo.',
            'Revisamos si cumples las condiciones y reunimos los soportes de tu vinculación.',
        ],
        points: ['Verificación de Requisitos', 'Revisión de tu Vinculación', 'Cálculo de lo Adeudado', 'Reclamación ante la Entidad', 'Demanda Contencioso Administrativa', 'Seguimiento del Proceso'],
        approachHeading: 'Un Reclamo Bien Fundamentado',
        approach: [
            'Presentamos la reclamación con los soportes que sustentan tu derecho y el valor reclamado.',
            'Si la entidad no responde o la niega, continuamos el caso ante la jurisdicción de lo contencioso administrativo.',
        ],
    },
    {
        slug: 'cesantias',
        heading: 'Cesantías: Reconocimiento y Sanción Moratoria',
        intro: [
            'Tramitamos el reconocimiento de tus cesantías sin demoras y reclamamos la sanción moratoria por el pago tardío.',
            'Revisamos si el pago se hizo a tiempo y por el valor correcto.',
        ],
        points: ['Revisión del Pago de Cesantías', 'Verificación de Fechas y Valores', 'Solicitud de Reconocimiento', 'Sanción Moratoria por Pago Tardío', 'Reclamación y Recursos', 'Representación Judicial'],
        approachHeading: 'No Dejes Pasar lo que te Corresponde',
        approach: [
            'Calculamos lo adeudado, incluida la sanción por la demora, y lo reclamamos ante la entidad o el empleador.',
            'Cuando es necesario, llevamos el caso ante la autoridad judicial competente.',
        ],
    },
    {
        slug: 'seguros-por-muerte',
        heading: 'Seguros por Muerte: Reclamación con Acompañamiento Total',
        intro: [
            'Reclamamos seguros por fallecimiento y por invalidez con acompañamiento total.',
            'Nos ocupamos de los trámites con la aseguradora para que la familia no tenga que hacerlo sola.',
        ],
        points: ['Revisión de la Póliza', 'Documentos de Reclamación', 'Presentación ante la Aseguradora', 'Seguimiento de la Respuesta', 'Reclamación por Objeción o Negativa', 'Proceso Judicial si es Necesario'],
        approachHeading: 'Cobertura que Sí se Hace Valer',
        approach: [
            'Analizamos las condiciones del seguro y los motivos de cualquier negativa para defender el derecho de los beneficiarios.',
            'Si la aseguradora no cumple, acudimos a las vías legales para exigir el pago.',
        ],
    },
    {
        slug: 'accidentes-de-transito',
        heading: 'Accidentes de Tránsito: Indemnización Eficaz',
        intro: [
            'Reclamamos indemnizaciones por accidentes viales de manera eficaz.',
            'Reunimos las pruebas del accidente y de los daños para sustentar tu reclamación.',
        ],
        points: ['Recopilación de Pruebas', 'Valoración de los Daños', 'Reclamación al Seguro', 'Negociación de la Indemnización', 'Acciones Legales si Hace Falta', 'Acompañamiento Permanente'],
        approachHeading: 'Respaldo Jurídico Después del Accidente',
        approach: [
            'Evaluamos las lesiones, los gastos y demás perjuicios para plantear una reclamación completa.',
            'Si no hay acuerdo, representamos tus intereses en la vía judicial correspondiente.',
        ],
    },
    {
        slug: 'falla-medica',
        heading: 'Falla Médica: Indemnización Justa por Fallas en Salud',
        intro: [
            'Demandamos fallas en la prestación del servicio de salud, buscando una indemnización justa.',
            'Estudiamos la historia clínica y las circunstancias del caso para determinar si hay fundamento.',
        ],
        points: ['Estudio de la Historia Clínica', 'Análisis de la Atención Recibida', 'Pruebas y Peritajes', 'Cálculo de los Perjuicios', 'Conciliación', 'Demanda de Responsabilidad'],
        approachHeading: 'Rigor Técnico y Humano',
        approach: [
            'Un caso de falla médica exige reunir pruebas técnicas sólidas; coordinamos ese trabajo con cuidado.',
            'Según la institución sea pública o privada, el proceso se adelanta ante la jurisdicción contencioso administrativa o la civil.',
        ],
    },
    {
        slug: 'demandas-laborales',
        heading: 'Demandas Laborales: Defensa Técnica y Estratégica',
        intro: [
            'Representamos a trabajadores y empresas en procesos laborales, desde la reclamación inicial hasta la sentencia.',
            'Analizamos el contrato, las pruebas y las liquidaciones para definir la mejor ruta.',
        ],
        points: ['Análisis del Caso y las Pruebas', 'Reclamación Previa', 'Demanda Ordinaria Laboral', 'Representación en Audiencias', 'Recursos e Instancias', 'Comunicación Constante'],
        approachHeading: 'Cada Proceso con Estrategia Propia',
        approach: [
            'No aplicamos formatos estándar: diseñamos la defensa según los hechos y las pruebas de cada caso.',
            'Te informamos en cada etapa para que sepas en qué punto está tu proceso.',
        ],
    },
    {
        slug: 'asesorias-empresariales',
        heading: 'Asesorías Empresariales: Prevención y Acompañamiento Laboral',
        intro: [
            'Orientamos a las empresas en temas laborales y de seguridad social con asesoría preventiva y acompañamiento personalizado.',
            'Nuestro enfoque es práctico y se adapta al tamaño y a la realidad de cada organización.',
        ],
        points: ['Asesoría Laboral Preventiva', 'Revisión de Contratos y Reglamentos', 'Procesos Disciplinarios', 'Terminaciones de Contrato', 'Liquidaciones y Prestaciones', 'Representación ante Autoridades'],
        approachHeading: 'Menos Riesgos, Más Seguridad Jurídica',
        approach: [
            'Identificamos riesgos antes de que se conviertan en conflictos y proponemos soluciones claras.',
            'Si el conflicto ya existe, representamos a la empresa con una defensa técnica y bien documentada.',
        ],
    },
    {
        slug: 'capacitaciones',
        heading: 'Capacitaciones: Conocimiento Jurídico para tu Equipo',
        intro: [
            'Capacitamos a empresas y equipos de trabajo en derecho laboral y seguridad social, con contenido claro y práctico.',
            'Adaptamos cada capacitación a las necesidades y al público de tu organización.',
        ],
        points: ['Derecho Laboral Aplicado', 'Seguridad Social', 'Derechos y Deberes del Trabajador', 'Buenas Prácticas para Empresas', 'Casos Prácticos', 'Espacio para Preguntas'],
        approachHeading: 'Prevenir También es Formar',
        approach: [
            'Una empresa informada comete menos errores y maneja mejor sus relaciones laborales.',
            'Coordinamos los temas, la duración y la modalidad según lo que necesites.',
        ],
    },
];

/*
 * Detalle de cada artículo del blog (/blog-details/:slug). Mismo `slug` que en `blogs`.
 * TEXTO TEMPORAL: orientación general y sin cifras (edades, semanas, plazos), porque las normas
 * pensionales cambian. Reemplazar por los artículos reales del bufete.
 * `defaultBlogDetail` es el texto original de la página (/blog-details sin artículo).
 */
export const defaultBlogDetail: BlogDetailType = {
    slug: '',
    heading: 'Su Guía Legal para Entender el Sistema Pensional Colombiano',
    intro: [
        'En el cambiante panorama legislativo, estar informado sobre sus derechos es fundamental. En Vera Villamizar Abogados, nos dedicamos a analizar los fallos recientes de las Altas Cortes y la normatividad vigente para proteger su futuro y el de su familia.',
        'Trabajamos estrechamente con usted para evaluar su historia laboral e identificar oportunidades de reliquidación o traslado. No deje su pensión al azar; permita que nuestros especialistas en seguridad social revisen su caso.',
    ],
    sectionHeading: 'Tácticas Legales para Desafíos Actuales',
    section: [
        'En el entorno laboral actual, conocer la ley no es una opción, es una necesidad para proteger su patrimonio. En Vera Villamizar, creemos que cada trabajador tiene derechos irrenunciables que deben ser defendidos con firmeza.',
        'Realizamos evaluaciones exhaustivas para entender sus desafíos particulares y ofrecemos asesoría preventiva o litigio estratégico según lo requiera su situación laboral.',
    ],
    points: [
        'Análisis de Historia Laboral',
        'Cálculo Actuarial Especializado',
        'Representación ante Colpensiones',
        'Trámites en Fondos Privados (AFP)',
        'Demandas Ordinarias Laborales',
        'Asesoría Preventiva',
    ],
    closingHeading: 'Cómo una Consulta Jurídica puede Cambiar su Horizonte',
    closing: 'En un mundo cada vez más dinámico, la asesoría legal temprana y personalizada es una herramienta vital para evitar pleitos costosos y asegurar su bienestar. Mediante videollamada o de forma presencial, estamos listos para atenderle.',
};

export const blogDetails: BlogDetailType[] = [
    {
        slug: 'reforma-pensional',
        heading: 'Reforma Pensional: Lo que Debes Revisar de tu Situación',
        intro: [
            'Los cambios en las normas pensionales generan dudas legítimas: ¿cambian mis requisitos?, ¿qué pasa con las semanas que ya cotizo?, ¿me conviene mantenerme en mi régimen?',
            'La respuesta depende de tu caso: tu edad, tu historial de cotizaciones y el régimen al que perteneces. Por eso conviene revisarlo con calma y con respaldo profesional.',
        ],
        sectionHeading: 'Qué Conviene Hacer Ahora',
        section: [
            'Reúne tu historia laboral y tus certificados de cotización, y verifica que no tengan inconsistencias que luego sean difíciles de corregir.',
            'Evita tomar decisiones de traslado de régimen sin asesoría: pueden afectar de forma importante el valor y la fecha de tu pensión.',
        ],
        points: ['Revisión de la Historia Laboral', 'Verificación de Semanas Cotizadas', 'Análisis del Régimen Aplicable', 'Evaluación de Opciones', 'Orientación sobre Traslados', 'Acompañamiento Personalizado'],
        closingHeading: 'Una Asesoría a Tiempo Marca la Diferencia',
        closing: 'Antes de decidir, consulta tu caso con nuestros especialistas en seguridad social. Te explicamos con claridad cómo te afectan las normas vigentes.',
    },
    {
        slug: 'nulidad-de-traslados',
        heading: 'Nulidad de Traslado: Cuándo es Posible Volver a Colpensiones',
        intro: [
            'Muchas personas se trasladaron del Régimen de Prima Media (Colpensiones) al de Ahorro Individual sin recibir información clara, suficiente y comprensible sobre las consecuencias de ese cambio.',
            'Cuando el traslado se hizo sin esa información, es posible pedir que se declare su nulidad o ineficacia y regresar al régimen anterior.',
        ],
        sectionHeading: 'Cómo se Analiza tu Caso',
        section: [
            'Revisamos tu historia de afiliación, los documentos que firmaste y la asesoría que realmente recibiste del fondo.',
            'Con base en la jurisprudencia de la Corte Suprema de Justicia, presentamos la reclamación y, si es necesario, el proceso judicial.',
        ],
        points: ['Estudio de la Afiliación', 'Revisión de Documentos Firmados', 'Información Brindada por el Fondo', 'Jurisprudencia Aplicable', 'Reclamación y Proceso Judicial', 'Regreso al Régimen de Prima Media'],
        closingHeading: 'Revisa si tu Traslado Puede Cuestionarse',
        closing: 'Cada caso es distinto. Cuéntanos tu situación y te decimos si hay fundamento para reclamar.',
    },
    {
        slug: 'estabilidad-laboral-reforzada',
        heading: 'Estabilidad Laboral Reforzada: Quiénes la Tienen y Qué Hacer',
        intro: [
            'La estabilidad laboral reforzada protege a ciertos trabajadores frente a despidos que no cumplen las garantías que exige la ley, por ejemplo por su estado de salud o por maternidad.',
            'Si terminan tu contrato sin respetar esa protección, puedes tener derecho a que se revise la decisión e incluso a reclamar el reintegro.',
        ],
        sectionHeading: 'Situaciones que Suelen Estar Protegidas',
        section: [
            'Entre otras, la protección puede aplicar a trabajadores con limitaciones de salud, a mujeres en embarazo o lactancia, a quienes están próximos a pensionarse y a ciertos representantes sindicales.',
            'Cada situación tiene requisitos propios; por eso es importante analizar los hechos y las pruebas de tu caso.',
        ],
        points: ['Trabajadores con Condiciones de Salud', 'Maternidad y Lactancia', 'Cercanía a la Pensión', 'Fuero Sindical', 'Reclamación de Reintegro', 'Indemnizaciones Aplicables'],
        closingHeading: 'Cuándo Buscar Asesoría',
        closing: 'Si te despidieron y crees que estabas protegido, actúa pronto: conserva tus documentos y consulta tu caso.',
    },
    {
        slug: 'requisitos-pension-de-vejez',
        heading: 'Pensión de Vejez en Colombia: Lo que Debes Verificar',
        intro: [
            'Para acceder a la pensión de vejez se exigen requisitos de edad y de semanas cotizadas, que cambian según el régimen al que perteneces.',
            'Conocer tu situación con anticipación te permite completar lo que falte y evitar sorpresas en el momento de reclamar.',
        ],
        sectionHeading: 'Cómo Prepararte',
        section: [
            'Solicita tu historia laboral y revisa que todos tus periodos de trabajo estén registrados y bien reportados.',
            'Si hay semanas sin reportar o errores, conviene corregirlos cuanto antes con los soportes que lo demuestren.',
        ],
        points: ['Edad Requerida según el Régimen', 'Semanas Cotizadas', 'Historia Laboral sin Errores', 'Tiempos Públicos y Privados', 'Solicitud ante la Entidad', 'Recursos si es Negada'],
        closingHeading: 'Planea tu Pensión con Tiempo',
        closing: 'Revisamos tu historia laboral y te orientamos sobre los pasos a seguir hasta el reconocimiento.',
    },
    {
        slug: 'despidos-injustificados',
        heading: 'Despido Injustificado: Primeros Pasos para Defender tus Derechos',
        intro: [
            'Un despido sin justa causa o sin respetar el debido proceso puede dar lugar a una indemnización y, en algunos casos, al reintegro.',
            'Saber cómo reaccionar en los primeros días ayuda a proteger tus derechos y las pruebas de tu caso.',
        ],
        sectionHeading: 'Qué Hacer si te Despidieron',
        section: [
            'Guarda la carta de terminación, tu contrato, los desprendibles de pago y cualquier comunicación con la empresa. No firmes documentos que no entiendas.',
            'Pide asesoría antes de aceptar una liquidación o un acuerdo: puede incluir menos de lo que te corresponde.',
        ],
        points: ['Conservar Documentos y Pruebas', 'Revisar la Liquidación', 'Verificar la Causa del Despido', 'Cálculo de la Indemnización', 'Posible Reintegro', 'Reclamación Laboral'],
        closingHeading: 'Antes de Firmar, Consulta',
        closing: 'Revisamos tu caso y te explicamos con claridad cuál es el mejor camino.',
    },
    {
        slug: 'contrato-de-trabajo',
        heading: 'Contrato de Trabajo: Modalidades y Qué Implican',
        intro: [
            'El contrato de trabajo puede pactarse a término indefinido, a término fijo o por obra o labor, y cada modalidad tiene reglas distintas sobre su duración y su terminación.',
            'Conocerlas te ayuda, como trabajador o como empresa, a evitar conflictos y a saber qué derechos y obligaciones tienes.',
        ],
        sectionHeading: 'Puntos que Debes Revisar',
        section: [
            'Verifica que el tipo de contrato corresponda a la realidad del trabajo: si hay subordinación, horario y pago periódico, puede existir una relación laboral aunque el papel diga otra cosa.',
            'Revisa también las cláusulas sobre duración, prórrogas y terminación antes de firmar.',
        ],
        points: ['Término Indefinido', 'Término Fijo', 'Obra o Labor', 'Contrato Realidad', 'Prórrogas y Terminación', 'Prestaciones Sociales'],
        closingHeading: 'Un Contrato Claro Previene Conflictos',
        closing: 'Revisamos y asesoramos tus contratos para que sean claros y ajustados a la ley.',
    },
    {
        slug: 'pensiones-de-invalidez',
        heading: 'Pensión de Invalidez: Pasos y Requisitos',
        intro: [
            'Cuando una enfermedad o un accidente reduce de forma importante la capacidad para trabajar, puede existir derecho a una pensión de invalidez.',
            'El proceso empieza con la calificación de la pérdida de capacidad laboral, que determina si cumples las condiciones.',
        ],
        sectionHeading: 'Cómo es el Trámite',
        section: [
            'Se califica la pérdida de capacidad laboral y su origen, y con ese dictamen se verifican los demás requisitos ante la entidad de pensiones.',
            'Si no estás de acuerdo con el dictamen o con la respuesta de la entidad, existen recursos y la vía judicial.',
        ],
        points: ['Calificación de la Invalidez', 'Revisión del Dictamen', 'Verificación de Requisitos', 'Solicitud de la Pensión', 'Recursos ante la Entidad', 'Proceso Judicial'],
        closingHeading: 'Acompañamiento en Cada Etapa',
        closing: 'Te orientamos desde la calificación hasta el reconocimiento de la pensión.',
    },
    {
        slug: 'acoso-laboral',
        heading: 'Acoso Laboral: Cómo Identificarlo y Defenderte',
        intro: [
            'El acoso laboral es una conducta persistente y demostrable que busca intimidar, humillar o perjudicar a un trabajador, y está regulada por la ley colombiana.',
            'No todo desacuerdo en el trabajo es acoso; por eso es importante saber reconocer las situaciones y reunir pruebas.',
        ],
        sectionHeading: 'Qué Puedes Hacer',
        section: [
            'Documenta los hechos con fechas, mensajes, correos y testigos, y acude al comité de convivencia laboral de tu empresa cuando exista.',
            'Cuando el problema no se resuelve internamente, puede acudirse a las autoridades competentes con la asesoría de un abogado.',
        ],
        points: ['Identificación de la Conducta', 'Recolección de Pruebas', 'Queja ante el Comité de Convivencia', 'Medidas de Protección', 'Reclamación ante las Autoridades', 'Acompañamiento Jurídico'],
        closingHeading: 'No Tienes que Enfrentarlo Solo',
        closing: 'Analizamos tu situación con reserva y te explicamos las opciones que tienes.',
    },
    {
        slug: 'liquidacion-laboral',
        heading: 'Liquidación Laboral: Qué Debe Pagarte tu Empleador',
        intro: [
            'Al terminar un contrato, el empleador debe liquidar y pagar lo que te corresponde: salarios pendientes y prestaciones sociales, entre otros conceptos.',
            'Revisar la liquidación con atención evita que firmes un documento con valores incompletos.',
        ],
        sectionHeading: 'Conceptos que Debes Verificar',
        section: [
            'Revisa que se incluyan los salarios pendientes, las cesantías y sus intereses, la prima de servicios y las vacaciones.',
            'Si el contrato terminó sin justa causa, puede corresponder además una indemnización.',
        ],
        points: ['Salarios Pendientes', 'Cesantías e Intereses', 'Prima de Servicios', 'Vacaciones', 'Indemnización si Aplica', 'Revisión Antes de Firmar'],
        closingHeading: 'Verifica Antes de Aceptar',
        closing: 'Revisamos tu liquidación y, si hay diferencias, te ayudamos a reclamarlas.',
    },
];

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

/*
 * Casos de /case-single/:slug. Alimenta la vista de caso único, la lista de /case-study
 * y "Ver más casos". El primero es el caso por defecto de /case-single.
 * TEXTO TEMPORAL: reemplazar por el contenido real de cada caso cuando el cliente lo entregue.
 * Sin cifras, montos ni resultados concretos hasta tener datos verificables.
 */
export const caseDetails: CaseDetailType[] = [
    {
        slug: 'reliquidacion-exitosa',
        homeOnly: true,
        title: 'Reliquidación Exitosa',
        category: 'Derecho Pensional',
        image: 'assets/img/others/case1-image1.webp',
        heroImage: 'assets/img/others/case-details-image.png',
        heading: 'Reliquidación Pensional: Un Caso de Éxito',
        intro: [
            'En el actual sistema de seguridad social, conocer los factores salariales exactos es clave para un retiro digno. Nuestro equipo analizó extensivamente el historial laboral del cliente para identificar omisiones de su fondo de pensiones.',
            'Un análisis riguroso y una estrategia legal enfocada permitieron recuperar el retroactivo y ajustar el valor definitivo de su pensión, asegurando su estabilidad y la de su familia.',
        ],
        strategy: [
            'Cada historia laboral es única. Nuestros abogados especialistas desarrollan argumentos jurídicos sólidos basados en la jurisprudencia actual de las Altas Cortes. No aplicamos formatos estándar; diseñamos defensas completas.',
            'Investigamos a fondo, calculamos los aportes reales y demostramos ante los jueces la verdadera realidad contributiva del trabajador, haciendo valer sus derechos adquiridos frente a Colpensiones o AFP.',
        ],
        benefits: [
            'Análisis Exhaustivo',
            'Representación Legal Sólida',
            'Protección del Patrimonio',
            'Asesoría Especializada',
            'Acompañamiento Constante',
            'Resultados Comprobados',
        ],
        result: 'El resultado no solo significó un aumento sustancial en la mesada pensional del cliente, sino una victoria jurídica que sienta un precedente importante para futuros casos de características similares.',
    },
    {
        slug: 'casos-de-exito-en-pensiones',
        title: 'Casos de Éxito en Pensiones',
        category: 'Derecho Pensional',
        image: 'assets/img/others/case1-image1.webp',
        heading: 'Reconocimiento de Pensiones: Acompañamiento de Principio a Fin',
        intro: [
            'Obtener el reconocimiento de la pensión ante Colpensiones o un fondo privado exige revisar con detalle las semanas cotizadas, el régimen aplicable y los requisitos de edad y tiempo de servicio.',
            'Nuestro equipo estudia la historia laboral de cada persona, corrige las inconsistencias y presenta la solicitud con el respaldo jurídico necesario para que su derecho sea reconocido.',
        ],
        strategy: [
            'Cuando la entidad niega o demora la pensión, presentamos los recursos correspondientes y, si es necesario, acudimos a la acción de tutela o al proceso ordinario laboral.',
            'Cada caso se prepara con soportes documentales y jurisprudencia vigente de las Altas Cortes, para defender el derecho del afiliado de forma completa.',
        ],
        benefits: [
            'Estudio de la Historia Laboral',
            'Cálculo de Semanas Cotizadas',
            'Trámite ante Colpensiones y Fondos Privados',
            'Recursos, Tutela y Demanda',
            'Seguimiento hasta el Reconocimiento',
            'Atención Personalizada',
        ],
        result: 'El objetivo de estas gestiones es que la persona acceda a una pensión justa, con el valor y la fecha de reconocimiento que realmente le corresponden.',
    },
    {
        slug: 'representacion-laboral',
        title: 'Representación Laboral',
        category: 'Derecho Laboral',
        image: 'assets/img/others/case1-image2.webp',
        heading: 'Representación Laboral: Defensa de los Derechos del Trabajador',
        intro: [
            'Salarios sin pagar, prestaciones sociales incompletas, contratos que ocultan una verdadera relación laboral o despidos sin justa causa son situaciones que afectan directamente a los trabajadores y a sus familias.',
            'Representamos al trabajador desde la reclamación inicial hasta el proceso judicial, con una estrategia clara y comunicación constante.',
        ],
        strategy: [
            'Analizamos el contrato, las pruebas de la relación laboral y las liquidaciones para identificar con exactitud lo que se adeuda y los derechos que deben reclamarse.',
            'Buscamos primero soluciones eficaces y, cuando es necesario, llevamos el caso ante la jurisdicción ordinaria laboral con una defensa técnica y bien sustentada.',
        ],
        benefits: [
            'Revisión del Contrato y las Pruebas',
            'Reclamación de Salarios y Prestaciones',
            'Contrato Realidad',
            'Defensa ante Despidos',
            'Representación en Audiencias',
            'Comunicación Constante',
        ],
        result: 'Buscamos que cada trabajador obtenga el pago de lo que se le debe y la tranquilidad de contar con un respaldo jurídico serio durante todo el proceso.',
    },
    {
        slug: 'derecho-laboral-docente',
        title: 'Derecho Laboral Docente',
        category: 'Administrativo',
        image: 'assets/img/others/case1-image3.webp',
        heading: 'Derecho Laboral Docente: Pensión y Prestaciones del Magisterio',
        intro: [
            'Los docentes afiliados al Fondo Nacional de Prestaciones Sociales del Magisterio (FOMAG) tienen derechos pensionales y prestacionales propios, que muchas veces no se reconocen en su totalidad.',
            'Revisamos el régimen aplicable, 2277 o 1278, y contabilizamos la totalidad de los tiempos laborados con los factores salariales efectivamente devengados.',
        ],
        strategy: [
            'Presentamos la reclamación ante la entidad y, si es negada o respondida de forma incompleta, acudimos a la jurisdicción de lo contencioso administrativo para defender el derecho del docente.',
            'También analizamos la transición de docentes del régimen 1278 al 2277 y la reclamación de la sanción moratoria por el pago tardío de las cesantías.',
        ],
        benefits: [
            'Docentes Afiliados al FOMAG',
            'Régimen 2277 y 1278',
            'Reconocimiento y Reliquidación Pensional',
            'Factores Salariales Devengados',
            'Sanción Moratoria por Cesantías',
            'Representación Contencioso Administrativa',
        ],
        result: 'El propósito es que cada docente reciba una pensión y unas prestaciones calculadas con todos sus tiempos y factores salariales, tras años de dedicación a la educación.',
    },
    {
        slug: 'asesoria-empresarial',
        title: 'Asesoría Empresarial',
        category: 'Derecho Laboral',
        image: 'assets/img/others/case1-image4.webp',
        heading: 'Asesoría Empresarial: Prevención y Defensa Laboral para Empresas',
        intro: [
            'Una buena gestión laboral protege a la empresa y a sus trabajadores. Acompañamos a las empresas en la prevención de conflictos y en la toma de decisiones con respaldo jurídico.',
            'Nuestro enfoque es preventivo, práctico y adaptado al tamaño y la realidad de cada organización.',
        ],
        strategy: [
            'Revisamos contratos, reglamentos internos, procesos disciplinarios y terminaciones de contrato para reducir riesgos antes de que se conviertan en demandas.',
            'Si el conflicto ya existe, representamos a la empresa ante las autoridades y los jueces con una defensa técnica y bien documentada.',
        ],
        benefits: [
            'Asesoría Laboral Preventiva',
            'Revisión de Contratos y Reglamentos',
            'Procesos Disciplinarios',
            'Terminaciones de Contrato',
            'Liquidaciones y Prestaciones',
            'Representación ante Autoridades',
        ],
        result: 'Buscamos que la empresa opere con seguridad jurídica, evite sanciones y litigios innecesarios y mantenga una relación clara con sus trabajadores.',
    },
    {
        slug: 'indemnizacion-por-despido',
        title: 'Indemnización por Despido',
        category: 'Derecho Laboral',
        image: 'assets/img/others/case1-image5-jorge.webp',
        heading: 'Indemnización por Despido: Defensa frente a una Terminación Injusta',
        intro: [
            'Cuando un contrato termina sin justa causa o sin respetar las garantías del trabajador, la ley prevé el pago de una indemnización y, en ciertos casos, el reintegro al cargo.',
            'Estudiamos las circunstancias del despido, las pruebas disponibles y la situación del trabajador para definir la mejor ruta de reclamación.',
        ],
        strategy: [
            'Verificamos si el despido cumplió los requisitos legales y si el trabajador gozaba de alguna protección especial, como la estabilidad laboral reforzada.',
            'Calculamos la indemnización y los demás valores adeudados, e iniciamos la reclamación o el proceso laboral cuando es necesario.',
        ],
        benefits: [
            'Análisis de la Causa del Despido',
            'Estabilidad Laboral Reforzada',
            'Cálculo de la Indemnización',
            'Salarios y Prestaciones Adeudados',
            'Solicitud de Reintegro cuando Procede',
            'Representación en el Proceso Laboral',
        ],
        result: 'Nuestro objetivo es que el trabajador reciba la indemnización y los pagos que le corresponden o, cuando la ley lo permite, recupere su puesto de trabajo.',
    },
    {
        slug: 'nulidad-de-traslado',
        title: 'Nulidad de Traslado',
        category: 'Derecho Pensional',
        image: 'assets/img/others/case1-image6.webp',
        heading: 'Nulidad de Traslado: Recupera tu Régimen de Prima Media',
        intro: [
            'Muchas personas se trasladaron del Régimen de Prima Media (Colpensiones) al de Ahorro Individual sin recibir información clara, suficiente y comprensible sobre las consecuencias de ese cambio.',
            'Cuando el traslado se hizo sin esa información, es posible solicitar que se declare la nulidad o ineficacia del traslado y volver al régimen anterior.',
        ],
        strategy: [
            'Revisamos la historia de afiliación, los documentos firmados y la asesoría que el fondo realmente brindó al afiliado.',
            'Con base en la jurisprudencia de la Corte Suprema de Justicia, adelantamos la reclamación y, si es necesario, el proceso judicial para lograr el regreso a Colpensiones.',
        ],
        benefits: [
            'Estudio de la Afiliación',
            'Revisión de la Información Entregada',
            'Jurisprudencia de la Corte Suprema',
            'Reclamación ante el Fondo',
            'Proceso Judicial',
            'Regreso al Régimen de Prima Media',
        ],
        result: 'El propósito es que la persona pueda pensionarse bajo las condiciones del Régimen de Prima Media cuando el traslado no se hizo de forma debidamente informada.',
    },
    {
        slug: 'reparacion-directa',
        title: 'Reparación Directa',
        category: 'Derecho Administrativo',
        image: 'assets/img/others/case1-image7.webp',
        heading: 'Reparación Directa: Responsabilidad del Estado por Daños Antijurídicos',
        intro: [
            'Cuando una acción u omisión de una entidad pública causa un daño que la persona no tiene el deber jurídico de soportar, puede reclamarse su reparación mediante el medio de control de reparación directa.',
            'Evaluamos el hecho dañoso, las pruebas y los perjuicios para determinar si el caso es viable y cómo plantearlo.',
        ],
        strategy: [
            'Reunimos los soportes que acreditan el daño, su relación con la actuación de la entidad y los perjuicios materiales e inmateriales sufridos.',
            'Representamos al afectado ante la jurisdicción de lo contencioso administrativo, cuidando los términos de caducidad y los requisitos de procedibilidad.',
        ],
        benefits: [
            'Estudio de Viabilidad',
            'Recolección de Pruebas',
            'Perjuicios Materiales e Inmateriales',
            'Conciliación Extrajudicial',
            'Demanda Contencioso Administrativa',
            'Control de Términos de Caducidad',
        ],
        result: 'Buscamos una reparación justa para la persona afectada y que la entidad responda por el daño que su actuación le causó.',
    },
    {
        slug: 'sucesion-tramitada',
        title: 'Sucesión Tramitada',
        category: 'Derecho Familiar',
        image: 'assets/img/others/case1-image8.webp',
        heading: 'Sucesión: Orden y Seguridad en la Herencia',
        intro: [
            'Cuando una persona fallece, sus bienes y deudas deben liquidarse y repartirse entre los herederos conforme a la ley o al testamento.',
            'Acompañamos a las familias en este trámite para que se realice de forma ordenada, clara y con seguridad jurídica.',
        ],
        strategy: [
            'Identificamos a los herederos, los bienes y las obligaciones de la herencia, y reunimos los documentos que el trámite exige.',
            'Según el caso, adelantamos la sucesión ante notaría de común acuerdo o mediante proceso judicial cuando existen desacuerdos.',
        ],
        benefits: [
            'Identificación de Herederos',
            'Inventario de Bienes y Deudas',
            'Trámite Notarial',
            'Proceso Judicial de Sucesión',
            'Partición de la Herencia',
            'Registro de los Bienes Adjudicados',
        ],
        result: 'El objetivo es que la herencia se reparta de manera justa y que los herederos reciban sus bienes con los títulos debidamente registrados.',
    },
    {
        slug: 'litigio-estrategico',
        title: 'Litigio Estratégico',
        category: 'Litigio',
        image: 'assets/img/others/case1-image9.webp',
        heading: 'Litigio Estratégico: Defensa Técnica en Cada Instancia',
        intro: [
            'Algunos casos exigen algo más que un trámite: requieren una estrategia pensada desde el inicio y sostenida en todas las instancias del proceso.',
            'Combinamos litigio estratégico y asesoría integral, con representación ante entidades y tribunales.',
        ],
        strategy: [
            'Definimos la teoría del caso, las pruebas y los argumentos jurídicos, apoyados en la jurisprudencia de las Altas Cortes.',
            'Cuando el asunto lo amerita, acudimos a los recursos extraordinarios, incluido el de casación, para defender los derechos del cliente hasta las últimas instancias.',
        ],
        benefits: [
            'Teoría del Caso',
            'Estrategia Probatoria',
            'Jurisprudencia de las Altas Cortes',
            'Recursos de Apelación y Casación',
            'Representación ante Tribunales',
            'Asesoría Integral',
        ],
        result: 'Buscamos decisiones favorables y sólidas, construidas con una defensa técnica constante y un acompañamiento cercano al cliente durante todo el proceso.',
    },
];

/*
 * Empresas aliadas. De aquí salen la sección de aliados y los testimonios (logo, nombre y mensaje).
 * MENSAJES PROVISIONALES: no son palabras de las empresas. Antes de publicar, reemplazar cada
 * `testimonial` por el texto que entregue o apruebe la propia empresa. Logos y nombres son reales.
 */
export const alliedCompanies: AlliedCompanyType[] = [
    {
        name: 'Pinilla Ramírez Consultores',
        logo: 'assets/img/aliados/pinilla_consultores_logo.jpeg',
        alt: 'Logo de Pinilla Ramírez Consultores',
        testimonial: 'Como aliados de Vera Villamizar Abogados, valoramos su compromiso, la claridad con que explican cada trámite y la confianza que transmiten en cada gestión.',
    },
    {
        name: 'SES',
        logo: 'assets/img/aliados/logo-ses.png.webp',
        alt: 'Logo de SES',
        testimonial: 'Contar con Vera Villamizar Abogados como aliado nos da tranquilidad. Es un equipo serio, disponible y cercano, que responde con compromiso.',
    },
    {
        name: "Hotel D'León",
        logo: 'assets/img/aliados/logohotel.png',
        alt: "Logo del Hotel D'León",
        // Logo blanco sobre transparente: necesita recuadro oscuro para verse.
        onDark: true,
        testimonial: 'En Vera Villamizar Abogados encontramos un equipo profesional y atento, con quien da gusto trabajar. Los recomendamos como aliados de confianza.',
    },
    {
        name: 'Ferretería C.S.R. Cementos Santa Rosa',
        logo: 'assets/img/aliados/logo-ferreteria.jpg',
        alt: 'Logo de Ferretería C.S.R. Cementos Santa Rosa',
        testimonial: 'Agradecemos el respaldo y la atención de Vera Villamizar Abogados. Es un equipo responsable, claro en sus explicaciones y siempre dispuesto a ayudar.',
    },
];

const companyTestimonials: TestimonialType[] = alliedCompanies.map(company => ({
    name: company.name,
    image: company.logo,
    role: 'Empresa aliada',
    message: `“${company.testimonial}”`,
    isCompany: true,
    onDark: company.onDark,
}));

export const TestimonialSlides: TestimonialType[] = companyTestimonials;

export const testimonials: TestimonialType[] = companyTestimonials;

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

/** Preguntas frecuentes (/faq). También alimentan los datos estructurados FAQPage para Google. */
export const faqGeneral: { id: number; question: string; answer: string }[] = [
    {
      id: 1,
      question: '¿Cuáles son los requisitos para pensionarme en Colombia?',
      answer: 'En el régimen público (Colpensiones), las mujeres deben tener 57 años y los hombres 62, con un mínimo de 1.300 semanas cotizadas. En los fondos privados, depende del capital ahorrado, aunque existe la garantía de pensión mínima con 1.150 semanas.',
    },
    {
      id: 2,
      question: '¿Fui despedido sin justa causa, tengo derecho a indemnización?',
      answer: 'Sí. Si tu empleador termina el contrato unilateralmente sin una causa justa contemplada en la ley, tienes derecho a una indemnización monetaria que varía según tu tipo de contrato (fijo o indefinido) y el tiempo laborado.',
    },
    {
      id: 3,
      question: '¿Puedo trasladarme de un fondo privado a Colpensiones?',
      answer: 'Generalmente sí, si te faltan más de 10 años para la edad de pensión (Ley de doble asesoría). Si ya pasaste ese límite, es posible hacerlo mediante una demanda de Nulidad de Afiliación, demostrando que no recibiste la asesoría adecuada al momento de afiliarte.',
    },
    {
      id: 4,
      question: '¿Qué hago si mi empleador no paga mis prestaciones sociales?',
      answer: 'El no pago de cesantías, primas o intereses genera una sanción moratoria (un día de salario por cada día de retraso). Podemos iniciar una reclamación administrativa o una demanda laboral para recuperar tu dinero y las sanciones correspondientes.',
    },
    {
      id: 5,
      question: '¿Manejan casos de calificación de pérdida de capacidad laboral?',
      answer: 'Sí. Te asesoramos en el proceso ante las Juntas de Calificación (Regional y Nacional) para obtener el porcentaje justo, buscando el reconocimiento de una pensión de invalidez o la indemnización sustitutiva según corresponda.',
    },
  ];

export const faqConsultas: { id: number; question: string; answer: string }[] = [
    {
      id: 1,
      question: '¿Tienen servicio de consulta virtual?',
      answer:
        '¡Por supuesto! Entendemos que tu tiempo es valioso o que puedes estar en otra ciudad. Ofrecemos asesoría jurídica virtual a través de videollamada (WhatsApp, Meet o Zoom) con la misma calidad y rigurosidad que una cita presencial.',
    },
    {
      id: 2,
      question: '¿Cuál es el costo de una consulta o representación?',
      answer:
        'Cada caso es único. La consulta inicial tiene un valor fijo accesible para evaluar la viabilidad de tu caso. Para los procesos de demanda, solemos trabajar con una cuota inicial y una cuota de éxito ("Cuota Litis") que solo pagas si ganamos el proceso.',
    },
    {
      id: 3,
      question: '¿Qué documentos necesito para la primera cita?',
      answer:
        'Para agilizar el estudio de tu caso, es ideal que traigas: Historia Laboral actualizada (descargable de Colpensiones o tu Fondo), copia de tu contrato de trabajo, carta de despido o liquidación, y resoluciones previas si las tienes.',
    },
    {
      id: 4,
      question: '¿Cuánto tiempo puede tardar una demanda laboral o pensional?',
      answer:
        'Los tiempos varían según la congestión de los juzgados. Un proceso ordinario laboral puede tomar en promedio entre 1 y 3 años en primera instancia. Sin embargo, nuestro compromiso es actuar con celeridad en cada etapa que dependa de nosotros.',
    },
    {
      id: 5,
      question: '¿Por qué elegir a Vera Villamizar Abogados?',
      answer:
        'Porque no somos generalistas; somos especialistas. Nos dedicamos exclusivamente al Derecho Laboral y Seguridad Social, lo que nos permite conocer a profundidad las estrategias legales más efectivas para proteger tu futuro y tu patrimonio.',
    }
  ];
