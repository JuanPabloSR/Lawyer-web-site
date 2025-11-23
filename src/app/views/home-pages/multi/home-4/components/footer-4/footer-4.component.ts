import { contactItems, instagramFeed, quickLinks } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-4',
  imports: [CommonModule,RouterLink],
  templateUrl: './footer-4.component.html',
  styles: ``
})
export class Footer4Component {
    instagramFeed = instagramFeed
    quickLinks = quickLinks
    contactItems = contactItems
    currentYear = new Date().getFullYear()
}
