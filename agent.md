# Project Context: Vera Villamizar Abogados

## 1. Project Overview
- **Client:** Vera Villamizar Abogados.
- **Domain:** Firma legal especializada en Derecho Laboral y Pensiones en Colombia (Bucaramanga/Floridablanca).
- **Audiencia Objetivo:** Usuarios que buscan representación legal para reclamaciones pensionales, despidos injustificados y derechos laborales. El tono debe ser profesional, empático, con autoridad y estrictamente en español de Colombia.
- **Objetivo Principal:** Generación de leads (conversiones vía WhatsApp y formulario de contacto) y autoridad de marca (SEO local y orgánico).

## 2. Tech Stack
- **Framework:** Angular 19 (TypeScript, HTML, SCSS).
- **Estilos:** SCSS modularizado (plantilla base adaptada). Enfoque Mobile-First.
- **Arquitectura:** Componentes standalone / estructura modular clásica (según configuración del proyecto base).

## 3. Coding Standards & Guidelines
- **Estructura de Componentes:** Separar responsabilidades. Mantener lógica de UI independiente de la ingesta de datos (usar `data.ts` o servicios para inyectar contenido).
- **Estilos:** Prohibido el uso de estilos en línea (`style="..."`) salvo excepciones dinámicas estrictamente necesarias. Priorizar clases del framework CSS subyacente o SCSS propio.
- **SEO y Accesibilidad:**
  - Uso estricto de HTML semántico (`<article>`, `<section>`, `<nav>`).
  - Atributos `alt` descriptivos en todas las imágenes, relevantes para SEO (ej. "Abogado laboralista en Bucaramanga").
  - Etiquetas ARIA donde sea necesario.
- **Idioma:** Todo el código fuente de UI, placeholders, alertas y etiquetas debe estar en español.

## 4. Key Features & Integrations
- **Mecanismos de Contacto:** Botón flotante de WhatsApp, formularios con validación, enlaces `mailto:` (`info@veravillamizarabogados.com`) y `tel:`.
- **Integraciones de Terceros:** Iframe de Google Maps apuntando a la sede física, API/Widget de Instagram en el footer para últimas publicaciones.
- **Vistas Estructurales:** Home, About, Team, Services (Grid y Details), Case Studies, Testimonials, Blog, Contact, FAQ.

## 5. AI Agent Directives
- Al generar contenido (placeholders o copy real), usar terminología jurídica colombiana precisa (ej. "Colpensiones", "Régimen de Prima Media", "Tutela", "Casación").
- Al refactorizar SCSS o HTML, auditar automáticamente transiciones y estados `:hover` para aplicar la paleta oficial de Vera Villamizar.
- Proporcionar código de reemplazo directo y optimizado. Evitar refactorizaciones masivas no solicitadas fuera del scope del prompt del usuario.