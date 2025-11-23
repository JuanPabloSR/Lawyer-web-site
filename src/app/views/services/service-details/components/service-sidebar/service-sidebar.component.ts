import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './service-sidebar.component.html',
  styles: ``
})
export class ServiceSidebarComponent {
    services = [
        'Business Strategy Planning',
        'Corporate Growth Advisory',
        'Strategic Risk Management',
        'Business Process Optimization',
        'Business Continuity Planning',
        'Crisis Management Solution'
      ];

      tags = [
        '#BusinessConsulting',
        '#SalesStrategy',
        '#DigitalTransformation',
        '#MarketAnalysis',
        '#RiskManagement',
        '#ClientSuccess',
        '#SuccessConsulting',
        '#GrowthStrategy'
      ];
}
