import { Routes } from '@angular/router';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CaseStudyDetailComponent } from './case-study-detail/case-study-detail.component';

export const CASE_STUDY_ROUTES: Routes = [
    {
        path: 'case-study',
        component: CaseStudyComponent,
        data: { title: "Casos de Estudio" }
    },
    {
        path: 'case-single',
        component: CaseStudyDetailComponent,
        data: { title: "Detalles de Caso Único" }
    },
    {
        path: 'case-single/:slug',
        component: CaseStudyDetailComponent,
        data: { title: "Detalles de Caso Único" },
    },
];
