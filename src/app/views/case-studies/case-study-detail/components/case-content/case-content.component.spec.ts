import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseContentComponent } from './case-content.component';
import { caseDetails } from '@/assets/data';

describe('CaseContentComponent', () => {
  let component: CaseContentComponent;
  let fixture: ComponentFixture<CaseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [CaseContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sin entrada muestra el caso por defecto', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent!.trim()).toBe(caseDetails[0].heading);
  });

  it('muestra el contenido del caso recibido', () => {
    const caso = caseDetails.find(c => c.slug === 'reparacion-directa')!;
    component.case = caso;
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h2')!.textContent!.trim()).toBe(caso.heading);
    expect(el.textContent).toContain(caso.intro[0]);
    expect(el.textContent).toContain(caso.strategy[0]);
    expect(el.textContent).toContain(caso.result);
    expect(el.querySelectorAll('.detials-check-list2').length).toBe(caso.benefits.length);
  });

  it('usa la foto del caso recortada, salvo que tenga portada propia', () => {
    const conPortada = caseDetails[0];
    const sinPortada = caseDetails.find(c => !c.heroImage)!;

    component.case = conPortada;
    fixture.detectChanges();
    let img: HTMLImageElement = fixture.nativeElement.querySelector('.image img');
    expect(img.getAttribute('src')).toBe(conPortada.heroImage!);
    expect(img.classList).not.toContain('case-hero');

    component.case = sinPortada;
    fixture.detectChanges();
    img = fixture.nativeElement.querySelector('.image img');
    expect(img.getAttribute('src')).toBe(sinPortada.image);
    expect(img.classList).toContain('case-hero');
    expect(img.getAttribute('alt')).toContain(sinPortada.title);
  });
});
