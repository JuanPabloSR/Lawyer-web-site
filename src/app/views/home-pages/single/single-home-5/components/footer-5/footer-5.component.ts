import { contactItems, instagramFeed, quickLinks } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-5',
  imports: [CommonModule,RouterLink],
  templateUrl: './footer-5.component.html',
  styles: ``
})
export class Footer5Component {
   instagramFeed = instagramFeed
    quickLinks = quickLinks
    contactItems = contactItems
    currentYear = new Date().getFullYear()
}
