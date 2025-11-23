import { TitleCaseFromKebabPipe } from '@/app/pipes/title-case-from-kabab.pipe';
import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';
import { ScrollService } from '@core/services/scroll.service';
import { MobileMenuComponent } from "@app/components/mobile-menu/mobile-menu.component";
import { SearchPopupComponent } from "@app/components/search-popup/search-popup.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-header-2',
  imports: [StickyScrollDirective, TitleCaseFromKebabPipe, CommonModule, MobileMenuComponent, SearchPopupComponent,RouterLink],
  templateUrl: './single-header-2.component.html',
  styles: ``
})
export class SingleHeader2Component implements OnInit{
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
