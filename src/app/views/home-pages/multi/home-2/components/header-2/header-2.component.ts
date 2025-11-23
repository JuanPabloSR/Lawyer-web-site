import { Component } from '@angular/core';
import { NavItemComponent } from "@app/components/nav-item/nav-item.component";
import { MobileMenuComponent } from "@app/components/mobile-menu/mobile-menu.component";
import { SearchPopupComponent } from "@app/components/search-popup/search-popup.component";
import { RouterLink } from '@angular/router';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';

@Component({
  selector: 'app-header-2',
  imports: [NavItemComponent, MobileMenuComponent, SearchPopupComponent,RouterLink,StickyScrollDirective],
  templateUrl: './header-2.component.html',
  styles: ``
})
export class Header2Component {
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
