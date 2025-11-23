import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  imports: [PageHeaderComponent,NgbAccordionModule,CommonModule],
  templateUrl: './faq.component.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})

export class FaqComponent { 
    activeItemIndex = 0;
    activeItemIndex2 = 0;
    faqs1 = [

        {
          id: 1,
          question: 'What is SEO and why is it important for my business?',
          answer: 'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.',
        },
        {
          id:2,
          question: 'How long does it take to see results from SEO?',
          answer: 'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.',
        },
        {
          id: 3,
          question: 'What services do offer SEO marketing company?',
          answer: 'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.',
        },
        {
          id: 4,
          question: 'How do you approach backlink building?',
          answer: 'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.',
        },
        {
          id: 5,
          question: 'What is local SEO how can it benefit my business?',
          answer: 'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.',
        },
      ];

      faqs2 = [
        {
          id: 1,
          question: 'Can you provide references or case studies?',
          answer:
            'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.'
        },
        {
          id: 2,
          question: 'What is the cost of your consulting services?',
          answer:
            'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.'
        },
        {
          id: 3,
          question: 'Can you help with business planning an strategy?',
          answer:
            'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.'
        },
        {
          id: 4,
          question: 'How do you stay updated on industry trends?',
          answer:
            'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.'
        },
        {
          id: 5,
          question: 'Are your consulting services customizable?',
          answer:
            'Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes SEO, social media marketing, content marketing, email marketing, an paid.'
        }
      ];
}
