import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-detail-sidebar',
    imports: [CommonModule,RouterLink],
    templateUrl: './blog-detail-sidebar.component.html',
    styles: ``
})
export class BlogDetailSidebarComponent {
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

    recentBlogs = [
        {
            image: 'assets/img/blog/recent-blog1.png',
            date: '4 August 2024',
            title: 'From Vision Reality: Crafting Winning To Business Strategies',
        },
        {
            image: 'assets/img/blog/recent-blog2.png',
            date: '4 August 2024',
            title: 'Stay Ahead of the Curve with Strategic Business Insights',
        },
        {
            image: 'assets/img/blog/recent-blog3.png',
            date: '4 August 2024',
            title: 'Strategic Roadmaps for Navigating Best Business Challenges',
        }
    ];
}
