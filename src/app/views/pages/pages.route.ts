import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { Error404Component } from './error-404/error-404.component';
import { ContactComponent } from './contact/contact.component';

export const PAGES_ROUTES: Routes = [
    {
        path: 'pages/about',
        component: AboutComponent,
        data: { title: "About"}

    },
    {
        path: 'pages/our-team',
        component: OurTeamComponent,
        data: { title: "Our Team"}

    },
    {
        path: 'pages/testimonials',
        component: TestimonialsComponent,
        data: { title: "Testimonials"}

    },
    {
        path: 'pages/faq',
        component: FaqComponent,
        data: { title: "Faq"}

    },
    {
        path: 'pages/error-404',
        component: Error404Component,
        data: { title: "404"}

    },
    {
        path: 'contact',
        component: ContactComponent,
        data: { title: "Contact"}

    },

];
