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
        {
            title: 'Asesoría Empresarial',
            category: 'Derecho Laboral',
            image: 'assets/img/others/case1-image4.webp',
        },
        {
            title: 'Indemnización por Despido',
            category: 'Derecho Laboral',
            image: 'assets/img/others/case1-image5.webp',
        },
        {
            title: 'Nulidad de Traslado',
            category: 'Derecho Pensional',
            image: 'assets/img/others/case1-image1.webp',
        },
        {
            title: 'Reparación Directa',
            category: 'Derecho Administrativo',
            image: 'assets/img/others/case1-image2.webp',
        },
        {
            title: 'Sucesión Tramitada',
            category: 'Derecho Familiar',
            image: 'assets/img/others/case1-image3.webp',
        },
        {
            title: 'Litigio Estratégico',
            category: 'Litigio',
            image: 'assets/img/others/case1-image4.webp',
        }
    ];
}
