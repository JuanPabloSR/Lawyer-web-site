import { instagramFeed } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer-2',
    imports: [CommonModule,RouterLink],
    templateUrl: './footer-2.component.html',
    styles: ``
})
export class Footer2Component {
    instagramFeed = instagramFeed
    currentYear = new Date().getFullYear()
}
