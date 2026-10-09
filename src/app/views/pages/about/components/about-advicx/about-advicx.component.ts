import { siteConfig } from '@/assets/data';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-advicx',
  imports: [RouterLink],
  templateUrl: './about-advicx.component.html',
  styles: ``
})
export class AboutAdvicxComponent {
    showPercentages = siteConfig.showPercentages
}
