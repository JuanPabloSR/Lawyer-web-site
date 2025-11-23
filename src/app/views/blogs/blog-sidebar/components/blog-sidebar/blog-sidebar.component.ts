import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-sidebar',
    imports: [CommonModule,RouterLink],
    templateUrl: './blog-sidebar.component.html',
    styles: ``
})
export class BlogSidebarComponent {
    services: string[] = [
        'Business Strategy Planning',
        'Corporate Growth Advisory',
        'Strategic Risk Management',
        'Business Process Optimization',
        'Business Continuity Planning',
        'Crisis Management Solution',
    ];

    tags: string[] = [
        '#BusinessConsulting',
        '#SalesStrategy',
        '#DigitalTransformation',
        '#MarketAnalysis',
        '#RiskManagement',
        '#ClientSuccess',
        '#SuccessConsulting',
        '#GrowthStrategy'
      ];
      
      authorImages: string[] = [
        'assets/img/blog/sidebar-author1.png',
        'assets/img/blog/sidebar-author2.png',
        'assets/img/blog/sidebar-author3.png',
        'assets/img/blog/sidebar-author4.png',
        'assets/img/blog/sidebar-author5.png',
        'assets/img/blog/sidebar-author6.png',
        'assets/img/blog/sidebar-author7.png',
        'assets/img/blog/sidebar-author8.png'
      ];
      
}
