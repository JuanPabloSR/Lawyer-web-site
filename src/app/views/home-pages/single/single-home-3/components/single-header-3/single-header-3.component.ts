import { Component, inject, type OnInit } from '@angular/core';
import { ScrollService } from '@core/services/scroll.service';
import { SearchPopupComponent } from "@app/components/search-popup/search-popup.component";
import { CommonModule } from '@angular/common';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';
import { TitleCaseFromKebabPipe } from '@/app/pipes/title-case-from-kabab.pipe';
import { MobileMenuComponent } from "@app/components/mobile-menu/mobile-menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-header-3',
  imports: [SearchPopupComponent, CommonModule, StickyScrollDirective, TitleCaseFromKebabPipe, MobileMenuComponent,RouterLink],
  templateUrl: './single-header-3.component.html',
  styles: ``
})
export class SingleHeader3Component  implements OnInit{
    public scroll = inject(ScrollService)

    menuItems = ["about", "service", "work", "case-study", "testimonial", "blog"]

    ngOnInit() {
        this.scroll.setSections(this.menuItems);
    }

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

