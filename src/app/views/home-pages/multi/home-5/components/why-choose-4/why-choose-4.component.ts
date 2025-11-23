import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-why-choose-4',
    imports: [CommonModule,RouterLink],
    templateUrl: './why-choose-4.component.html',
    styles: ``
})
export class WhyChoose4Component {
    features = [{
        title: 'Easy Process',
        description: 'We pride ourselves on delivering the tailored.',
        icon: 'assets/img/icons/choose5-icon3.svg',
    },
    {
        title: 'Save Money',
        description: 'Advicx means choose  partner who invested.',
        icon: 'assets/img/icons/choose5-icon2.svg',
    },
    {
        title: 'High Security',
        description: 'Our dedicated team to works closely with you.',
        icon: 'assets/img/icons/choose5-icon1.svg',
    }]
}
