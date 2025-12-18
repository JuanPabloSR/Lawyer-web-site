import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { Error404Component } from './error-404/error-404.component';
import { ContactComponent } from './contact/contact.component';


export const PAGES_ROUTES: Routes = [
    {
        path: 'acerca-de',
        component: AboutComponent,
        data: { title: "Acerca de" }
    },
    {
        path: 'nuestro-equipo',
        component: OurTeamComponent,
        data: { title: "Nuestro Equipo" }
    },
    {
        path: 'testimonios',
        component: TestimonialsComponent,
        data: { title: "Testimonios" }
    },
    {
        path: 'preguntas-frecuentes',
        component: FaqComponent,
        data: { title: "Preguntas Frecuentes" }
    },
    {
        path: 'error-404',
        component: Error404Component,
        data: { title: "Error 404" }
    },
    {
        path: 'contacto',
        component: ContactComponent,
        data: { title: "Contacto" }
    },
];
