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
            label: 'Inicio',
            icon: '',
            link: '/home-1',
            subMenu: []
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
                        { title: 'Blog 2 Columnas', link: '/blog/grid-2' }
                    ],
                },
                {
                    title: 'Detalles del Blog',
                    subMenu: [
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
