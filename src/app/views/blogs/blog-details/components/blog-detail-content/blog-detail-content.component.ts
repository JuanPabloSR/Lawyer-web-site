import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-detail-content',
    imports: [CommonModule],
    templateUrl: './blog-detail-content.component.html',
    styles: ``
})
export class BlogDetailContentComponent {
    services: string[] = [
        'Análisis de Historia Laboral',
        'Cálculo Actuarial Especializado',
        'Representación ante Colpensiones',
        'Trámites en Fondos Privados (AFP)',
        'Demandas Ordinarias Laborales',
        'Asesoría Preventiva'
    ];

    comments = [
        {
            author: 'Carlos Rodríguez',
            date: '8 Diciembre 2024',
            image: 'assets/img/testimonial/tes1-author1.png',
            content: `Me parece excelente que aclaren todos estos temas. Muchos no sabemos que tenemos derecho a reclamar cuando el fondo de pensiones comete errores en el cálculo de nuestras mesadas.`,
            isReply: false
        },
        {
            author: 'Equipo Vera Villamizar',
            date: '8 Diciembre 2024',
            image: 'assets/img/testimonial/tes1-author2.png',
            content: `Gracias por su comentario, Carlos. En efecto, la revisión de la historia laboral es el primer paso vital para garantizar que su esfuerzo de toda la vida sea reconocido adecuadamente.`,
            isReply: true
        }
    ];
}
