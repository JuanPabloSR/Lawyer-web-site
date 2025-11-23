import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { services } from '../data';

@Component({
    selector: 'app-services-5',
    imports: [NgbNavModule,CommonModule],
    templateUrl: './services-5.component.html',
    styles: ``
})
export class Services5Component {
    active = 1;
    services = services
}
