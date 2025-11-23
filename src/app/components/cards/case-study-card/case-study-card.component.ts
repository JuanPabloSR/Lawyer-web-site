import type { CaseStudyType } from '@/types';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-case-study-card',
    imports: [],
    templateUrl: './case-study-card.component.html',
    styles: ``
})
export class CaseStudyCardComponent {
    @Input() case!: CaseStudyType
}
