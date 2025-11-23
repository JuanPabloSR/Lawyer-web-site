import { servicesData } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-services-4',
    imports: [RouterLink,CommonModule],
    templateUrl: './services-4.component.html',
    styles: ``
})
export class Services4Component {
    services = servicesData
}
