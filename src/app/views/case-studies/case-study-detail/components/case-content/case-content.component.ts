import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-case-content',
    imports: [CommonModule],
    templateUrl: './case-content.component.html',
    styles: ``
})
export class CaseContentComponent {
    benefits: string[] = [
        'Análisis Exhaustivo',
        'Representación Legal Sólida',
        'Protección del Patrimonio',
        'Asesoría Especializada',
        'Acompañamiento Constante',
        'Resultados Comprobados'
    ];

    progressData = [
        { title: 'Éxito en Reclamaciones', value: 98 },
        { title: 'Satisfacción del Cliente', value: 99 },
        { title: 'Incremento Pensional Logrado', value: 85 }
    ];
}
