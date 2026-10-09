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
            ],
        },
        { title: 'Servicios', link: '/our-services' },
        { title: 'Casos de Estudio', link: '/case-study' },
        { title: 'Blog', link: '/blog/grid-2' },
        { title: 'Contacto', link: '/contact' },
    ];
}