import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { workSteps } from '../data';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-work-2',
    imports: [CommonModule,RouterLink],
    templateUrl: './work-2.component.html',
    styles: ``
})
export class Work2Component {
    steps = workSteps
}
