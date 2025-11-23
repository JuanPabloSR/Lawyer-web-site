import { Routes } from '@angular/router';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CaseDetailLeftComponent } from './case-study-detail/case-detail-left/case-detail-left.component';
import { CaseDetailRightComponent } from './case-study-detail/case-detail-right/case-detail-right.component';
import { CaseStudyDetailComponent } from './case-study-detail/case-study-detail.component';

export const CASE_STUDY_ROUTES: Routes = [
    {
        path: 'case-study',
        component: CaseStudyComponent,
        data: { title: "Case Study" }
    },
    {
        path: 'case-details/left',
        component: CaseDetailLeftComponent,
        data: { title: "Case Study Left" }
    },
    {
        path: 'case-details/right',
        component: CaseDetailRightComponent,
        data: { title: "Case Study Right" }
    },
    {
        path: 'case-single',
        component: CaseStudyDetailComponent,
        data: { title: "Case Study Single" }
    },


];
