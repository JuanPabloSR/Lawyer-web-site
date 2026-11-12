import { docentesServiceSlugs, faqDocentes, servicesData } from '@/assets/data';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import type { ServiceType } from '@/types';

/** Página para búsquedas como "abogados para docentes" o "abogados del magisterio". */
@Component({
    selector: 'app-abogados-docentes',
    imports: [PageHeaderComponent, RouterLink],
    templateUrl: './abogados-docentes.component.html',
})
export class AbogadosDocentesComponent {
    services = docentesServiceSlugs
        .map(slug => servicesData.find(s => s.slug === slug))
        .filter((s): s is ServiceType => !!s);

    faqs = faqDocentes;

    steps = [
        { title: 'Análisis del caso', text: 'Revisamos tu vinculación, tu régimen (2277 o 1278), tus tiempos de servicio y las resoluciones que tengas.' },
        { title: 'Estrategia legal', text: 'Te explicamos con claridad qué puedes reclamar y cuál es el camino más conveniente.' },
        { title: 'Gestión y representación', text: 'Presentamos la reclamación ante el FOMAG o la entidad, y la demanda cuando es necesario.' },
        { title: 'Resultados y seguimiento', text: 'Hacemos seguimiento hasta que tu derecho quede reconocido y pagado.' },
    ];
}
