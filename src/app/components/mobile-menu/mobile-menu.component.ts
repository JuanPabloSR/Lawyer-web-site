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
            "title": "Pages",
            "link": "#",
            "icon": 'fas fa-angle-down',
            "isOpen": false,
            "subMenu": [
                { title: 'About Us', link: '/about' },
                { title: 'Nuestro equipo', link: '/our-team' },
                { title: 'Testimonials', link: '/testimonials' },
                { title: 'FAQ', link: '/faq' },
                { title: '404', link: '/error' },
            ]
        },
        {
            "title": "Services",
            "link": "#",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                { title: "Service Details Left", link: '/service-details/left' },
                { title: "Service Details Right", link: '/service-details/right' },
                { title: "Service Details", link: '/service-details' }
            ]
        },
        {
            "title": "Case Study",
            "link": "#",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                { title: "Case Details Left", link: '/case-details/left' },
                { title: "Case Details Right", link: '/case-details/right' },
                { title: "Case Single", link: '/case-single' }
            ]
        },
        {
            "title": "Blogs ",
            "link": "#",
            "isOpen": false,
            "icon": 'fa-angle-down',
            "subMenu": [
                {
                    title: 'Our Blogs',
                    subMenu: [
                        { title: 'Blog 2 Grid', link: '/blog/grid-2' },
                        { title: 'Blog 3 Grid', link: '/blog/grid-3' },
                    ],
                },
                {
                    title: 'Blog Sidebar',
                    subMenu: [
                        { title: 'Blog Left', link: '/blog-sidebar/left' },
                        { title: 'Blog Right', link: '/blog-sidebar/right' },
                    ],
                },
                {
                    title: 'Blog Details',
                    subMenu: [
                        { title: 'Blog Details Left', link: '/blog-details/left' },
                        { title: 'Blog Details Right', link: '/blog-details/right' },
                        { title: 'Blog Details', link: '/blog-details' },
                    ],
                },
            ],

        },
        {
            "title": "Contact ",
            "link": "/contact",
        }
    ]
}
