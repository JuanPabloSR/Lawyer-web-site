import { defaultBlogDetail } from '@/assets/data';
import type { BlogDetailType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog-detail-content',
    imports: [CommonModule],
    templateUrl: './blog-detail-content.component.html',
    styles: ``
})
export class BlogDetailContentComponent {
    /** Sin entrada (/blog-details y las variantes left/right) se muestra el texto original. */
    @Input() detail: BlogDetailType = defaultBlogDetail;
    @Input() image = 'assets/img/blog/blog-details-image1.webp';
    @Input() imageAlt = 'Jorge Alberto Vera Villamizar, socio director de Vera Villamizar Abogados';

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
