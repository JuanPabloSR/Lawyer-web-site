import { contactItems, instagramFeed, quickLinks } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer-3',
    imports: [CommonModule,RouterLink],
    templateUrl: './footer-3.component.html',
    styles: ``
})
export class Footer3Component {
    instagramFeed = instagramFeed
    quickLinks = quickLinks
    contactItems = contactItems
    currentYear = new Date().getFullYear()
}
