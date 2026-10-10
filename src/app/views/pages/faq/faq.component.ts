import { faqConsultas, faqGeneral } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  imports: [PageHeaderComponent, NgbAccordionModule, CommonModule],
  templateUrl: './faq.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FaqComponent {
  activeItemIndex = 0;
  activeItemIndex2 = 0;
  faqs1 = faqGeneral;

  faqs2 = faqConsultas;
}
