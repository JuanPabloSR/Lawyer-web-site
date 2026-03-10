import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { Error404Component } from './error-404/error-404.component';
import { ContactComponent } from './contact/contact.component';


export const PAGES_ROUTES: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        data: { title: "Acerca de" }
    },
    {
        path: 'our-team',
        component: OurTeamComponent,
        data: { title: "Nuestro Equipo" }
    },
    {
        path: 'testimonials',
        component: TestimonialsComponent,
        data: { title: "Testimonios" }
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: { title: "Preguntas Frecuentes" }
    },
    {
        path: 'error-404',
        component: Error404Component,
        data: { title: "Error 404" }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: { title: "Contacto" }
    },
];
