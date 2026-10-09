import { siteConfig } from '@/assets/data';
import { Injectable } from '@angular/core';

export type ContactPayload = {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    servicio: string;
    mensaje: string;
};

/**
 * Envía el formulario de contacto por correo con FormSubmit (https://formsubmit.co), sin backend propio.
 * El destino es `siteConfig.contactEmail`. La primera vez que llegue un envío real, FormSubmit manda un
 * correo de activación a esa dirección: hay que confirmarlo una sola vez.
 * Para cambiar de servicio (p. ej. Web3Forms) basta con reemplazar este archivo.
 */
@Injectable({ providedIn: 'root' })
export class ContactFormService {
    private readonly endpoint = `https://formsubmit.co/ajax/${siteConfig.contactEmail}`;

    async send(data: ContactPayload): Promise<void> {
        const nombreCompleto = `${data.nombre} ${data.apellido}`.trim();

        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                'Nombre': nombreCompleto,
                'Teléfono': data.telefono,
                'Servicio': data.servicio,
                'Mensaje': data.mensaje || '(sin mensaje)',
                // `email` hace que al responder el correo se escriba directo al cliente.
                'email': data.correo,
                '_subject': `Nueva consulta web: ${data.servicio} (${nombreCompleto})`,
                '_template': 'table',
                '_captcha': 'false',
            }),
        });

        const result = await response.json().catch(() => null);
        if (!response.ok || !result || String(result.success) !== 'true') {
            throw new Error(result?.message ?? 'No se pudo enviar el mensaje');
        }
    }
}
