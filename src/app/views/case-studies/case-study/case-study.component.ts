import { caseDetails } from '@/assets/data';
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
    /** Paginación oculta por pedido de la usuaria (2026-10-10); poner en true para volver a mostrarla. */
    showPagination = false;

    caseStudies: CaseStudyType[] = caseDetails.filter(c => !c.homeOnly);
}
