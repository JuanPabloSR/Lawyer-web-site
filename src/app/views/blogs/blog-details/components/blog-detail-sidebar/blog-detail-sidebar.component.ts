import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-detail-sidebar',
    imports: [CommonModule,RouterLink],
    templateUrl: './blog-detail-sidebar.component.html',
    styles: ``
})
export class BlogDetailSidebarComponent {
    services: string[] = [
        'Derecho Pensional',
        'Derecho Laboral',
        'Derecho Administrativo',
        'Nulidad de Traslados',
        'Casación Laboral',
        'Seguridad Social',
    ];

    tags: string[] = [
        '#PensiónColombia',
        '#TusDerechos',
        '#DemandaLaboral',
        '#Indemnización',
        '#TrasladoDeFondo',
        '#AsesoríaLegal',
        '#VeraVillamizar'
    ];

    authorImages: string[] = [
        'assets/img/blog/sidebar-author1.png',
        'assets/img/blog/sidebar-author2.png',
        'assets/img/blog/sidebar-author3.png',
        'assets/img/blog/sidebar-author4.png',
        'assets/img/blog/sidebar-author5.png',
        'assets/img/blog/sidebar-author6.png',
        'assets/img/blog/sidebar-author7.png',
        'assets/img/blog/sidebar-author8.png'
    ];

    recentBlogs = [
        {
            image: 'assets/img/blog/recent-blog1.png',
            date: '4 Agosto 2024',
            title: 'Novedades sobre la Reforma Pensional',
        },
        {
            image: 'assets/img/blog/recent-blog2.png',
            date: '4 Agosto 2024',
            title: 'Cómo calcular su retroactivo pensional paso a paso',
        },
        {
            image: 'assets/img/blog/recent-blog3.png',
            date: '4 Agosto 2024',
            title: '¿Fui despedido sin justa causa? Esto debe saber',
        }
    ];
}
