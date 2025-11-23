import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { servicesData } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-our-service',
    imports: [PageHeaderComponent, GsapRevealDirective, PaginationComponent,CommonModule,RouterLink],
    templateUrl: './our-service.component.html',
    styles: ``
})
export class OurServiceComponent {
    services = servicesData
}
