import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { workSteps } from '../data';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-work-3',
    imports: [CommonModule,RouterLink],
    templateUrl: './work-3.component.html',
    styles: ``
})
export class Work3Component {
    steps = workSteps
}
