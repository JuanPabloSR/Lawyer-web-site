import { caseDetails, siteConfig } from '@/assets/data';
import { Routes } from '@angular/router';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CaseDetailLeftComponent } from './case-study-detail/case-detail-left/case-detail-left.component';
import { CaseDetailRightComponent } from './case-study-detail/case-detail-right/case-detail-right.component';
import { CaseStudyDetailComponent } from './case-study-detail/case-study-detail.component';

export const CASE_STUDY_ROUTES: Routes = [
    {
        path: 'case-study',
        component: CaseStudyComponent,
        data: { title: "Casos de Estudio" }
    },
    /*
    {
        path: 'case-details/left',
        component: CaseDetailLeftComponent,
        data: { title: "Detalles de Caso Izquierda" }
    },
    {
        path: 'case-details/right',
        component: CaseDetailRightComponent,
        data: { title: "Detalles de Caso Derecha" }
    },
    */
    {
        path: 'case-single',
        component: CaseStudyDetailComponent,
        data: { title: "Detalles de Caso Único" },
        title: () => caseDetails[0].title + siteConfig.titleSuffix
    },
    {
        path: 'case-single/:slug',
        component: CaseStudyDetailComponent,
        data: { title: "Detalles de Caso Único" },
        // Título dinámico de la pestaña: el nombre del caso (si el slug no existe, la vista redirige).
        title: (route) => (caseDetails.find(c => c.slug === route.paramMap.get('slug'))?.title ?? 'Casos de Estudio') + siteConfig.titleSuffix
    },


];
