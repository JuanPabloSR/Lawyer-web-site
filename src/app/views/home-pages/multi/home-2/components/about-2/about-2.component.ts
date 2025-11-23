import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';

@Component({
    selector: 'app-about-2',
    imports: [CommonModule,GsapRevealDirective,RouterLink],
    templateUrl: './about-2.component.html',
    styles: ``
})
export class About2Component {
    aboutData = [
        {
            icon: 'assets/img/icons/about2-icon1.svg',
            title: 'Finance Planning',
            description: 'Advicx is dedicated to helping businesses thrive through expert consulting that delivers impactful.',
            link: '/about'
        },
        {
            icon: 'assets/img/icons/about2-icon2.svg',
            title: 'Market Analysis',
            description: 'Backed by over 15 years of experience an diverse team of 100+ consultants, we’ve on successfully.',
            link: '/about'
        }
    ]
}
