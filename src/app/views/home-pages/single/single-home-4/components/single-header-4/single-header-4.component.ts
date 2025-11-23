import { TitleCaseFromKebabPipe } from '@/app/pipes/title-case-from-kabab.pipe';
import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileMenuComponent } from '@app/components/mobile-menu/mobile-menu.component';
import { SearchPopupComponent } from '@app/components/search-popup/search-popup.component';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';
import { ScrollService } from '@core/services/scroll.service';

@Component({
  selector: 'app-single-header-4',
  imports: [MobileMenuComponent, SearchPopupComponent,StickyScrollDirective,TitleCaseFromKebabPipe,CommonModule,RouterLink],
  templateUrl: './single-header-4.component.html',
  styles: ``
})
export class SingleHeader4Component implements OnInit{
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