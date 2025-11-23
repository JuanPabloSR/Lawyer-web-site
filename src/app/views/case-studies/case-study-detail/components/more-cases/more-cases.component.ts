import type { CaseStudyType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CaseStudyCardComponent } from "@app/components/cards/case-study-card/case-study-card.component";

@Component({
  selector: 'app-more-cases',
  imports: [CommonModule, CaseStudyCardComponent],
  templateUrl: './more-cases.component.html',
  styles: ``
})
export class MoreCasesComponent {
    caseStudiesData: CaseStudyType[] = [
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
    ];
}
