import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  imports: [PageHeaderComponent, NgbAccordionModule, CommonModule],
  templateUrl: './faq.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FaqComponent {
  activeItemIndex = 0;
  activeItemIndex2 = 0;
  faqs1 = [
    {
      id: 1,
      question: '¿Cuáles son los requisitos para pensionarme en Colombia?',
      answer: 'En el régimen público (Colpensiones), las mujeres deben tener 57 años y los hombres 62, con un mínimo de 1.300 semanas cotizadas. En los fondos privados, depende del capital ahorrado, aunque existe la garantía de pensión mínima con 1.150 semanas.',
    },
    {
      id: 2,
      question: '¿Fui despedido sin justa causa, tengo derecho a indemnización?',
      answer: 'Sí. Si tu empleador termina el contrato unilateralmente sin una causa justa contemplada en la ley, tienes derecho a una indemnización monetaria que varía según tu tipo de contrato (fijo o indefinido) y el tiempo laborado.',
    },
    {
      id: 3,
      question: '¿Puedo trasladarme de un fondo privado a Colpensiones?',
      answer: 'Generalmente sí, si te faltan más de 10 años para la edad de pensión (Ley de doble asesoría). Si ya pasaste ese límite, es posible hacerlo mediante una demanda de Nulidad de Afiliación, demostrando que no recibiste la asesoría adecuada al momento de afiliarte.',
    },
    {
      id: 4,
      question: '¿Qué hago si mi empleador no paga mis prestaciones sociales?',
      answer: 'El no pago de cesantías, primas o intereses genera una sanción moratoria (un día de salario por cada día de retraso). Podemos iniciar una reclamación administrativa o una demanda laboral para recuperar tu dinero y las sanciones correspondientes.',
    },
    {
      id: 5,
      question: '¿Manejan casos de calificación de pérdida de capacidad laboral?',
      answer: 'Sí. Te asesoramos en el proceso ante las Juntas de Calificación (Regional y Nacional) para obtener el porcentaje justo, buscando el reconocimiento de una pensión de invalidez o la indemnización sustitutiva según corresponda.',
    },
  ];

  faqs2 = [
    {
      id: 1,
      question: '¿Tienen servicio de consulta virtual?',
      answer:
        '¡Por supuesto! Entendemos que tu tiempo es valioso o que puedes estar en otra ciudad. Ofrecemos asesoría jurídica virtual a través de videollamada (WhatsApp, Meet o Zoom) con la misma calidad y rigurosidad que una cita presencial.',
    },
    {
      id: 2,
      question: '¿Cuál es el costo de una consulta o representación?',
      answer:
        'Cada caso es único. La consulta inicial tiene un valor fijo accesible para evaluar la viabilidad de tu caso. Para los procesos de demanda, solemos trabajar con una cuota inicial y una cuota de éxito ("Cuota Litis") que solo pagas si ganamos el proceso.',
    },
    {
      id: 3,
      question: '¿Qué documentos necesito para la primera cita?',
      answer:
        'Para agilizar el estudio de tu caso, es ideal que traigas: Historia Laboral actualizada (descargable de Colpensiones o tu Fondo), copia de tu contrato de trabajo, carta de despido o liquidación, y resoluciones previas si las tienes.',
    },
    {
      id: 4,
      question: '¿Cuánto tiempo puede tardar una demanda laboral o pensional?',
      answer:
        'Los tiempos varían según la congestión de los juzgados. Un proceso ordinario laboral puede tomar en promedio entre 1 y 3 años en primera instancia. Sin embargo, nuestro compromiso es actuar con celeridad en cada etapa que dependa de nosotros.',
    },
    {
      id: 5,
      question: '¿Por qué elegir a Vera Villamizar Abogados?',
      answer:
        'Porque no somos generalistas; somos especialistas. Nos dedicamos exclusivamente al Derecho Laboral y Seguridad Social, lo que nos permite conocer a profundidad las estrategias legales más efectivas para proteger tu futuro y tu patrimonio.',
    }
  ];
}
