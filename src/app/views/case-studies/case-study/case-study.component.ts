import type { CaseStudyType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { CaseStudyCardComponent } from "@app/components/cards/case-study-card/case-study-card.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";

@Component({
  selector: 'app-case-study',
  imports: [PageHeaderComponent, CommonModule, CaseStudyCardComponent, PaginationComponent],
  templateUrl: './case-study.component.html',
  styles: ``
})
export class CaseStudyComponent {
    caseStudies: CaseStudyType[] = [
        {
            image: 'assets/img/others/case1-image1.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image2.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image3.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image4.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image5.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image6.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image7.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image8.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
        {
            image: 'assets/img/others/case1-image9.png',
            category: 'Business Consulting',
            title: 'Strategic Marketing',
        },
    ];
}
