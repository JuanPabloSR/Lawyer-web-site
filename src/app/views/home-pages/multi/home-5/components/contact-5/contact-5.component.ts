import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';

@Component({
  selector: 'app-contact-5',
  imports: [GsapRevealDirective,CommonModule,FormsModule],
  templateUrl: './contact-5.component.html',
  styles: ``
})
export class Contact5Component {
    categories: string[] = ['Car', 'Business', 'Family', 'Health', 'House'];
    activeCategory: string = 'Car';
    balance: number = 5000;
    setCategory(category: string) {
        this.activeCategory = category;
      }
}
