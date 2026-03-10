import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
    title: string;
    link?: string;
    icon?: string;
    subMenu?: MenuItem[];
    megaMenu?: MenuItem[];
    image?: string;
    isOpen?: boolean
}


@Component({
    selector: 'app-mobile-menu',
    imports: [CommonModule, RouterLink],
    templateUrl: './mobile-menu.component.html',
    styles: ``
})
export class MobileMenuComponent {

    menuOpen = false;
    @Input() themeBtn?: string = ''
    @Input() scrollMenu?: boolean
    @Input() isMenuOpen = false;
    @Output() closeMenuEvent = new EventEmitter<void>();

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    closeSidebar() {
        this.closeMenuEvent.emit();
    }

    toggleSubMenu(item: MenuItem, event?: Event): void {
        if (event) {
            event.stopPropagation();
        }

        if (item.subMenu) {
            item.isOpen = !item.isOpen;
        }
    }

    scrollMenuItems = ["About", "Service", "Work", "Case Study", "Testimonial", "Blog"]

    menuItems = [
        {
            label: 'Home',
            icon: 'fas fa-angle-down',
            subMenu: [
                { title: 'Business Consulting 01', link: '/index', image: 'assets/img/demo/demo1.jpg' },
                { title: 'Business Consulting 02', link: '/index2', image: 'assets/img/demo/demo2.jpg' },
                { title: 'Business Consulting 03', link: '/index3', image: 'assets/img/demo/demo3.jpg' },
                { title: 'Business Consulting 04', link: '/index4', image: 'assets/img/demo/demo4.jpg' },
                { title: 'Business Consulting 05', link: '/index5', image: 'assets/img/demo/demo5.jpg' },
            ]
        }
    ];

    menu: MenuItem[] = [
        {
            "title": "Páginas",
            "link": "#",
            "icon": 'fas fa-angle-down',
            "isOpen": false,
            "subMenu": [
                { title: 'Sobre Nosotros', link: '/about' },
                { title: 'Nuestro Equipo', link: '/our-team' },
                { title: 'Testimonios', link: '/testimonials' },
                { title: 'Preguntas Frecuentes', link: '/faq' },
                { title: 'Error 404', link: '/error-404' },
            ]
        },
        {
            "title": "Servicios",
            "link": "#",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                { title: 'Nuestros Servicios', link: '/our-services' },
                { title: "Servicio Detalles Izquierda", link: '/service-details/left' },
                { title: "Servicio Detalles Derecha", link: '/service-details/right' },
                { title: "Servicio Detalles", link: '/service-details' }
            ]
        },
        {
            "title": "Casos de Estudio",
            "link": "#",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                { title: 'Casos de Estudio', link: '/case-study' },
                { title: "Caso Detalles Izquierda", link: '/case-details/left' },
                { title: "Caso Detalles Derecha", link: '/case-details/right' },
                { title: "Caso Único", link: '/case-single' }
            ]
        },
        {
            "title": "Blog",
            "link": "#",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                {
                    title: 'Nuestro Blog',
                    subMenu: [
                        { title: 'Blog 2 Columnas', link: '/blog/grid-2' },
                        { title: 'Blog 3 Columnas', link: '/blog/grid-3' },
                    ],
                },
                {
                    title: 'Blog Sidebar',
                    subMenu: [
                        { title: 'Blog Izquierda', link: '/blog-sidebar/left' },
                        { title: 'Blog Derecha', link: '/blog-sidebar/right' },
                    ],
                },
                {
                    title: 'Detalles del Blog',
                    subMenu: [
                        { title: 'Detalles Izquierda', link: '/blog-details/left' },
                        { title: 'Detalles Derecha', link: '/blog-details/right' },
                        { title: 'Detalles', link: '/blog-details' },
                    ],
                },
            ],

        },
        {
            "title": "Contacto",
            "link": "/contact",
        }
    ]
}
