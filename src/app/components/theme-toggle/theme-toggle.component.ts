import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styles: ``
})
export class ThemeToggleComponent {
    toggleTheme(event: Event): void {
        const isChecked = (event.target as HTMLInputElement).checked;
        document.body.classList.toggle('dark-mode', isChecked);
      }
}
