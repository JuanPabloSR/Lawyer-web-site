import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { NavItemComponent } from "../nav-item/nav-item.component";
import { SearchPopupComponent } from "../search-popup/search-popup.component";

@Component({
    selector: 'app-header',
    imports: [NavItemComponent, StickyScrollDirective, MobileMenuComponent, SearchPopupComponent,RouterLink],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
    isMenuOpen = false;

    isSearchOpen = false;

    openSearch(): void {
        this.isSearchOpen = !this.isSearchOpen;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        this.isMenuOpen = false;
    }
}
