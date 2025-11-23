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
            title: 'Home',
            icon: 'fa-solid fa-angle-down',
            megaMenu: [
                { title: 'Business Consulting 01', link: '/home-1', singleLink: "/single-home-1", image: 'assets/img/demo/demo1.jpg' },
                { title: 'Business Consulting 02', link: '/home-2', singleLink: "/single-home-2", image: 'assets/img/demo/demo2.jpg' },
                { title: 'Business Consulting 03', link: '/home-3', singleLink: "/single-home-3", image: 'assets/img/demo/demo3.jpg' },
                { title: 'Business Consulting 04', link: '/home-4', singleLink: "/single-home-4", image: 'assets/img/demo/demo4.jpg' },
                { title: 'Business Consulting 05', link: '/home-5', singleLink: "/single-home-5", image: 'assets/img/demo/demo5.jpg' },
            ],
        },
        {
            title: 'Pages',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'About Us', link: '/pages/about' },
                { title: 'Our Team', link: '/pages/our-team' },
                { title: 'Testimonials', link: '/pages/testimonials' },
                { title: 'FAQ', link: '/pages/faq' },
                { title: '404', link: '/pages/error-404' },
            ],
        },
        {
            title: 'Services',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'Our Services', link: '/our-services' },
                {
                    title: 'Service Details',
                    submenu: [
                        { title: "Service Details Left", link: '/service-details/left' },
                        { title: "Service Details Right", link: '/service-details/right' },
                        { title: "Service Details", link: '/service-details' }
                    ]
                },
            ],
        },
        {
            title: 'Case Study',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                { title: 'Case Study', link: '/case-study' },
                {
                    title: 'Case Details',
                    submenu: [
                        { title: "Case Details Left", link: '/case-details/left' },
                        { title: "Case Details Right", link: '/case-details/right' },
                        { title: "Case Single", link: '/case-single' }
                    ]
                },
            ],
        },
        {
            title: 'Blogs',
            icon: 'fa-solid fa-angle-down',
            submenu: [
                {
                    title: 'Our Blogs',
                    submenu: [
                        { title: 'Blog 2 Grid', link: '/blog/grid-2' },
                        { title: 'Blog 3 Grid', link: '/blog/grid-3' },
                    ],
                },
                {
                    title: 'Blog Sidebar',
                    submenu: [
                        { title: 'Blog Left', link: '/blog-sidebar/left' },
                        { title: 'Blog Right', link: '/blog-sidebar/right' },
                    ],
                },
                {
                    title: 'Blog Details',
                    submenu: [
                        { title: 'Blog Details Left', link: '/blog-details/left' },
                        { title: 'Blog Details Right', link: '/blog-details/right' },
                        { title: 'Blog Details', link: '/blog-details' },
                    ],
                },
            ],
        },
        { title: 'Contact', link: '/contact' },
    ];
}
