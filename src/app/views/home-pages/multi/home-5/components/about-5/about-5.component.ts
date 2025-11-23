import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';

@Component({
  selector: 'app-about-5',
  imports: [GsapRevealDirective,CommonModule,RouterLink],
  templateUrl: './about-5.component.html',
  styles: ``
})
export class About5Component {
    features: string[] = [
        'Client-Centered Approach',
        'Tailored Solutions',
        'Proven Record of Success',
        'Proven Expertise'
      ];
}
