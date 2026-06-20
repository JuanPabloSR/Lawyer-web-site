import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
    title: string;
    link?: string;
    singleLink?: string;
    icon?: string;
    submenu?: MenuItem[];
    megaMenu?: MenuItem[];
    image?: string;
}

@Component({
    selector: 'app-nav-item',
    imports: [RouterLink],
    templateUrl: './nav-item.component.html',
    styles: ``
})
export class NavItemComponent {

    @Input() themeBtn: string = ''
    @Input() arrow?: boolean = true
    @Input() btnSpace?: boolean = false

    menuItems: MenuItem[] = [
        {
            title: 'Inicio',
            link: '/home-1',
        },
        {
            title: 'Páginas',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'Sobre Nosotros', link: '/about' },
                { title: 'Nuestro Equipo', link: '/our-team' },
                { title: 'Testimonios', link: '/testimonials' },
                { title: 'Preguntas Frecuentes', link: '/faq' },
                { title: 'Error 404', link: '/error-404' },
            ],
        },
        {
            title: 'Servicios',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'Nuestros Servicios', link: '/our-services' },
                {
                    title: 'Detalles de Servicio',
                    submenu: [
                        { title: "Servicio Detalles", link: '/service-details' }
                    ]
                },
            ],
        },
        {
            title: 'Casos de Estudio',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'Casos de Estudio', link: '/case-study' },
                {
                    title: 'Detalles del Caso',
                    submenu: [
                        { title: "Caso Único", link: '/case-single' }
                    ]
                },
            ],
        },
        {
            title: 'Blog',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                {
                    title: 'Nuestro Blog',
                    submenu: [
                        { title: 'Blog 2 Columnas', link: '/blog/grid-2' }
                    ],
                },
                {
                    title: 'Detalles del Blog',
                    submenu: [
                        { title: 'Detalles', link: '/blog-details' },
                    ],
                },
            ],
        },
        { title: 'Contacto', link: '/contact' },
    ];
}