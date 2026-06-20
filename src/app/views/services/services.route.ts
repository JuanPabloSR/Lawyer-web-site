import { Routes } from '@angular/router';
import { OurServiceComponent } from './our-service/our-service.component';
import { ServiceDetailsLeftComponent } from './service-details/service-details-left/service-details-left.component';
import { ServiceDetailsRightComponent } from './service-details/service-details-right/service-details-right.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';


export const SERVICES_ROUTES: Routes = [
    {
        path: 'our-services',
        component: OurServiceComponent,
        data: { title: "Nuestros Servicios"}
    },
    /*
    {
        path: 'service-details/left',
        component: ServiceDetailsLeftComponent,
        data: { title: "Detalles de Servicio Izquierda"}
    },
    {
        path: 'service-details/right',
        component: ServiceDetailsRightComponent,
        data: { title: "Detalles de Servicio Derecha"}
    },
    */
    {
        path: 'service-details',
        component: ServiceDetailsComponent,
        data: { title: "Detalles de Servicio"}
    },

];
