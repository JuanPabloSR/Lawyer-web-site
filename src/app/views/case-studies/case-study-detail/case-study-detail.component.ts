import { caseDetails } from '@/assets/data';
import { Component, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, skip } from 'rxjs';
import { CaseContentComponent } from "./components/case-content/case-content.component";
import { MoreCasesComponent } from "./components/more-cases/more-cases.component";
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";

@Component({
  selector: 'app-case-study-detail',
  imports: [CaseContentComponent, MoreCasesComponent, PageHeaderComponent],
  templateUrl: './case-study-detail.component.html',
  styles: ``
})
export class CaseStudyDetailComponent {
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    private slug = toSignal(
        this.route.paramMap.pipe(map(params => params.get('slug'))),
        { initialValue: this.route.snapshot.paramMap.get('slug') }
    );

    /** Caso de la URL; sin slug (/case-single) se muestra el primero, como hasta ahora. */
    case = computed(() => caseDetails.find(c => c.slug === this.slug()) ?? caseDetails[0]);

    /** Otros tres casos de la lista de /case-study, sin repetir el actual. */
    moreCases = computed(() =>
        caseDetails.filter(c => !c.homeOnly && c.slug !== this.case().slug).slice(0, 3)
    );

    constructor() {
        // Al saltar de un caso a otro desde "Ver más casos" el componente se reutiliza: volver arriba.
        this.route.paramMap.pipe(skip(1), takeUntilDestroyed())
            .subscribe(() => window.scrollTo({ top: 0 }));

        effect(() => {
            const slug = this.slug();
            if (slug && !caseDetails.some(c => c.slug === slug)) {
                this.router.navigateByUrl('/case-study', { replaceUrl: true });
            }
        });
    }
}
