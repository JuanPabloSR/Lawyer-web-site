import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-detail-content',
    imports: [CommonModule],
    templateUrl: './blog-detail-content.component.html',
    styles: ``
})
export class BlogDetailContentComponent {
    services: string[] = [
        'Management Consulting',
        'Customize Consulting',
        'Sustainability Consulting',
        'Financial Consulting',
        'Clear Scope and Goals',
        'Problem Solve Business'
    ];

    comments = [
        {
            author: 'Alex Robertson',
            date: '8 December 2024',
            image: 'assets/img/testimonial/tes1-author1.png',
            content: `In today’s dynamic business landscape, organizations face numerous challenges that
            require strategic thinking and expert guidance. Business consulting serves as a crucial
            resource, providing companies with the insights an tools necessary.`,
            isReply: false
        },
        {
            author: 'Theo Hernandez',
            date: '8 December 2024',
            image: 'assets/img/testimonial/tes1-author2.png',
            content: `At Advicx, our consulting services are tailored to meet the unique needs of each client,
            focusing on areas such as operational efficiency, market expansion, and digital
            transformation. By leveraging data analytics and.`,
            isReply: true
        }
    ];
}
