import { Routes } from '@angular/router';
import { OurServiceComponent } from './our-service/our-service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

export const SERVICES_ROUTES: Routes = [
    {
        path: 'our-services',
        component: OurServiceComponent,
        data: { title: "Nuestros Servicios"}
    },
    {
        path: 'service-details',
        component: ServiceDetailsComponent,
        data: { title: "Detalles de Servicio"}
    },
    {
        path: 'service-details/:slug',
        component: ServiceDetailsComponent,
        data: { title: "Detalles de Servicio" },
    },
];
