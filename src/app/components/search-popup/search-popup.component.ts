import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-search-popup',
    imports: [CommonModule,RouterLink],
    templateUrl: './search-popup.component.html',
    styles: ``
})
export class SearchPopupComponent {
    @Input() isSearchOpen!: boolean;
    // @Output

    closeSearch(): void {
        this.isSearchOpen = !this.isSearchOpen;
    }
}
