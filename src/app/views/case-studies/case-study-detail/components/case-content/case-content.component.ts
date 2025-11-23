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
        'Increased Efficiency',
        'Enhanced Security',
        'Business Continuity',
        'Access To Expertise',
        'Custom IT Solutions',
        'Seamless Integration'
    ];

    progressData = [
        { title: 'Financial Delivered Growth', value: 98 },
        { title: 'Financial Revenue Growth', value: 98 },
        { title: 'Result And Review', value: 99 }
    ];
}
