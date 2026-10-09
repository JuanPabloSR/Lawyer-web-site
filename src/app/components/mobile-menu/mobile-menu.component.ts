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
            ]
        },
        { "title": "Servicios", "link": "/our-services" },
        { "title": "Casos de Estudio", "link": "/case-study" },
        { "title": "Blog", "link": "/blog/grid-2" },
        { "title": "Contacto", "link": "/contact" },
    ]
}
