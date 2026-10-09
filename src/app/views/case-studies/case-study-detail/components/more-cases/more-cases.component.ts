import { caseDetails } from '@/assets/data';
import type { CaseStudyType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CaseStudyCardComponent } from "@app/components/cards/case-study-card/case-study-card.component";

@Component({
  selector: 'app-more-cases',
  imports: [CommonModule, CaseStudyCardComponent],
  templateUrl: './more-cases.component.html',
  styles: ``
})
export class MoreCasesComponent {
    /** Sin entrada (variantes left/right) se muestran los tres primeros de la lista. */
    @Input() cases: CaseStudyType[] = caseDetails.filter(c => !c.homeOnly).slice(0, 3);
}
