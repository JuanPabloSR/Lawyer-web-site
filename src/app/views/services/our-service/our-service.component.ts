import { Component, computed, HostListener, signal } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';
import { servicesData } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/** Filas de tarjetas por página. */
const ROWS_PER_PAGE = 2;

@Component({
    selector: 'app-our-service',
    imports: [PageHeaderComponent, PaginationComponent, GsapRevealDirective, CommonModule, RouterLink],
    templateUrl: './our-service.component.html',
    styles: ``
})
export class OurServiceComponent {
    services = servicesData

    /** Columnas de la cuadrícula según el ancho (mismos cortes que col-lg-4 / col-md-6). */
    private columns = signal(this.columnsFor(window.innerWidth));
    private currentPage = signal(1);

    /** 2 filas por página; en celular (1 columna) 4 tarjetas para que no sean solo 2. */
    pageSize = computed(() => this.columns() === 1 ? 4 : this.columns() * ROWS_PER_PAGE);
    totalPages = computed(() => Math.ceil(this.services.length / this.pageSize()));
    page = computed(() => Math.min(this.currentPage(), this.totalPages()));
    visibleServices = computed(() => {
        const start = (this.page() - 1) * this.pageSize();
        return this.services.slice(start, start + this.pageSize());
    });

    @HostListener('window:resize')
    onResize() {
        this.columns.set(this.columnsFor(window.innerWidth));
    }

    goTo(page: number) {
        this.currentPage.set(page);
        // Vuelve al inicio de la cuadrícula para ver las tarjetas nuevas.
        document.querySelector('.services-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    private columnsFor(width: number): number {
        return width >= 992 ? 3 : width >= 768 ? 2 : 1;
    }
}
