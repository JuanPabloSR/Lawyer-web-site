import { Component } from '@angular/core';
import { NiceSelectDirective } from '@core/directives/nice-select.directive';
@Component({
    selector: 'app-contact-4',
    imports: [NiceSelectDirective],
    templateUrl: './contact-4.component.html',
    styles: ``
})
export class Contact4Component{

    currentYear: number = new Date().getFullYear();


}
