import { caseDetails, siteConfig } from '@/assets/data';
import type { CaseDetailType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-case-content',
    imports: [CommonModule],
    templateUrl: './case-content.component.html',
    styles: ``
})
export class CaseContentComponent {
    /** Sin entrada (variantes left/right) se muestra el caso por defecto. */
    @Input() case: CaseDetailType = caseDetails[0];

    showPercentages = siteConfig.showPercentages;

    progressData = [
        { title: 'Éxito en Reclamaciones', value: 98 },
        { title: 'Satisfacción del Cliente', value: 99 },
        { title: 'Incremento Pensional Logrado', value: 85 }
    ];
}
