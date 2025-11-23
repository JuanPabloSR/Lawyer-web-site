import { Routes } from '@angular/router';
import { OurServiceComponent } from './our-service/our-service.component';
import { ServiceDetailsLeftComponent } from './service-details/service-details-left/service-details-left.component';
import { ServiceDetailsRightComponent } from './service-details/service-details-right/service-details-right.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';


export const SERVICES_ROUTES: Routes = [
    {
        path: 'our-services',
        component: OurServiceComponent,
        data: { title: "Our Services"}
    },
    {
        path: 'service-details/left',
        component: ServiceDetailsLeftComponent,
        data: { title: "Service Details Left"}
    },
    {
        path: 'service-details/right',
        component: ServiceDetailsRightComponent,
        data: { title: "Service Details Right"}
    },
    {
        path: 'service-details',
        component: ServiceDetailsComponent,
        data: { title: "Service Details"}
    },

];
