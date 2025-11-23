import { Component } from '@angular/core';
import { workSteps } from '../data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-work-1',
    imports: [CommonModule,RouterLink],
    templateUrl: './work-1.component.html',
    styles: ``
})
export class Work1Component {
    workSteps = workSteps
}
