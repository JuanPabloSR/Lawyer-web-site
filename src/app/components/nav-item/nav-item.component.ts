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
            title: 'Páginas',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'Sobre Nosotros', link: '/acerca-de' },
                { title: 'Nuestro Equipo', link: '/nuestro-equipo' },
                { title: 'Testimonios', link: '/testimonios' },
                { title: 'Preguntas Frecuentes', link: '/preguntas-frecuentes' },
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
                        { title: "Servicio Detalles Izquierda", link: '/servicios/detalles/izquierda' },
                        { title: "Servicio Detalles Derecha", link: '/servicios/detalles/derecha' },
                        { title: "Servicio Detalles", link: '/servicios/detalles' }
                    ]
                },
            ],
        },
        {
            title: 'Casos de Estudio',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'Casos de Estudio', link: '/casos-de-estudio' },
                {
                    title: 'Detalles del Caso',
                    submenu: [
                        { title: "Caso Detalles Izquierda", link: '/casos-de-estudio/detalles/izquierda' },
                        { title: "Caso Detalles Derecha", link: '/casos-de-estudio/detalles/derecha' },
                        { title: "Caso Único", link: '/casos-de-estudio/unico' }
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
                        { title: 'Blog 2 Columnas', link: '/blog/grid-2' },
                        { title: 'Blog 3 Columnas', link: '/blog/grid-3' },
                    ],
                },
                {
                    title: 'Blog Sidebar',
                    submenu: [
                        { title: 'Blog Izquierda', link: '/blog/sidebar/izquierda' },
                        { title: 'Blog Derecha', link: '/blog/sidebar/derecha' },
                    ],
                },
                {
                    title: 'Detalles del Blog',
                    submenu: [
                        { title: 'Detalles Izquierda', link: '/blog/detalles/izquierda' },
                        { title: 'Detalles Derecha', link: '/blog/detalles/derecha' },
                        { title: 'Detalles', link: '/blog/detalles' },
                    ],
                },
            ],
        },
        { title: 'Contacto', link: '/contacto' },
    ];
}