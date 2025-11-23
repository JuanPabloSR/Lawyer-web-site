import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-service-content',
    imports: [CommonModule,NgbAccordionModule],
    templateUrl: './service-content.component.html',
    styles: ``
})
export class ServiceContentComponent {
    activeItemIndex = 0;
    services: string[] = [
        'Management Consulting',
        'Management Consulting',
        'Management Consulting',
        'Management Consulting',
        'Management Consulting',
        'Management Consulting'
    ];

    faqData1 = [
        {
            question: 'What is SEO and why is it important for my business?',
            answer: 'SEO helps improve your website’s visibility in search engines, which can drive more organic traffic and potential customers to your business.',
        },
        {
            question: 'How long does it take to see results from SEO?',
            answer: 'SEO is a long-term strategy. It usually takes 3 to 6 months to see significant results depending on your competition and strategy.',
        },
        {
            question: 'What services do offer SEO marketing company?',
            answer: 'Typical SEO services include keyword research, on-page optimization, content creation, link building, and technical SEO audits.',
        },
        {
            question: 'How do you approach backlink building?',
            answer: 'Backlink building involves earning links from reputable websites through outreach, guest posting, and creating valuable content.',
        },
        {
            question: 'What is local SEO how can it benefit my business?',
            answer: 'Local SEO helps your business appear in local search results, making it easier for nearby customers to find and contact you.',
        }
    ];

}
