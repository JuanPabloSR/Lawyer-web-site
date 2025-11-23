import { Component } from '@angular/core';
import { workProcessSteps } from '../data';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-work-4',
    imports: [CommonModule,DecimalPipe,RouterLink],
    templateUrl: './work-4.component.html',
    styles: ``
})
export class Work4Component {
    workProcessSteps = workProcessSteps
}
