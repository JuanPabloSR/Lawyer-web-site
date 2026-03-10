import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-service-content',
    imports: [CommonModule,NgbAccordionModule],
    templateUrl: './service-content.component.html',
    styles: ``
})
export class ServiceContentComponent {
    activeItemIndex = 0;
    services: string[] = [
        'Análisis de Historia Laboral',
        'Cálculo Actuarial Especializado',
        'Representación ante Colpensiones',
        'Trámites en Fondos Privados (AFP)',
        'Demandas Ordinarias Laborales',
        'Asesoría Preventiva'
    ];

    faqData1 = [
        {
            question: '¿Qué es una reliquidación pensional y cuándo aplica?',
            answer: 'Es un ajuste al valor de la pensión cuando no se tuvieron en cuenta todos los factores salariales o el número correcto de semanas al momento de su reconocimiento.',
        },
        {
            question: '¿Cuánto tiempo dura un proceso contra Colpensiones?',
            answer: 'Generalmente un proceso ordinario laboral toma entre 1 o 2 años en primera instancia, dependiendo del juzgado asignado, pero nosotros actuamos para agilizar cada etapa.',
        },
        {
            question: '¿Es posible trasladarse de un fondo privado a Colpensiones?',
            answer: 'Sí. Si no recibió la doble asesoría y le convence más el régimen público, iniciamos un proceso de Nulidad de Afiliación para recuperar su régimen original.',
        },
        {
            question: '¿Qué factores salariales se deben incluir en mi pensión?',
            answer: 'Deben incluirse sueldos, primas extralegales, sobresueldos, horas extras, bonificaciones habituales y recargos nocturnos debidamente demostrados.',
        },
        {
            question: '¿Garantizan resultados en mi demanda?',
            answer: 'Como profesionales, garantizamos el mayor celo y aplicación jurídica en su defensa (obligación de medio), pero el último fallo depende del juez.',
        }
    ];

}
