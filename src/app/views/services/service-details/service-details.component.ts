import { defaultServiceDetail, serviceDetails, servicesData } from '@/assets/data';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ServiceContentComponent } from "./components/service-content/service-content.component";
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";

@Component({
  selector: 'app-service-details',
  imports: [ServiceContentComponent, PageHeaderComponent],
  templateUrl: './service-details.component.html',
  styles: ``
})
export class ServiceDetailsComponent {
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    private slug = toSignal(
        this.route.paramMap.pipe(map(params => params.get('slug'))),
        { initialValue: this.route.snapshot.paramMap.get('slug') }
    );

    /** Servicio de la URL; sin slug (/service-details) se mantiene la página genérica de siempre. */
    service = computed(() => servicesData.find(s => s.slug === this.slug()));

    detail = computed(() => serviceDetails.find(d => d.slug === this.slug()) ?? defaultServiceDetail);

    title = computed(() => this.service()?.title ?? 'Detalles de servicio');

    constructor() {
        effect(() => {
            const slug = this.slug();
            if (slug && !serviceDetails.some(d => d.slug === slug)) {
                this.router.navigateByUrl('/our-services', { replaceUrl: true });
            }
        });
    }
}
