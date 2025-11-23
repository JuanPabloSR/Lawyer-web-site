import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';

@Component({
    selector: 'app-about-1',
    imports: [RouterLink,GsapRevealDirective],
    templateUrl: './about-1.component.html',
    styles: ``
})
export class About1Component {

}
