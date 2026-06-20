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
            title: 'Casos de Éxito en Pensiones',
            category: 'Derecho Pensional',
            image: 'assets/img/others/case1-image1.webp',
        },
        {
            title: 'Representación Laboral',
            category: 'Derecho Laboral',
            image: 'assets/img/others/case1-image2.webp',
        },
        {
            title: 'Derecho Laboral Docente',
            category: 'Administrativo',
            image: 'assets/img/others/case1-image3.webp',
        },
    ];
}
