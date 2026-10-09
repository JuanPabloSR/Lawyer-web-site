import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyCardComponent } from './case-study-card.component';
import { CaseStudyType } from '@/types';

describe('CaseStudyCardComponent', () => {
  let component: CaseStudyCardComponent;
  let fixture: ComponentFixture<CaseStudyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [CaseStudyCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CaseStudyCardComponent);
    component = fixture.componentInstance;
    component.case = {
      image: 'ruta/de/prueba.jpg',
    } as CaseStudyType;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('no genera enlace cuando el caso no tiene slug', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('a'));
    expect(links.length).toBe(2);
    links.forEach(link => expect(link.getAttribute('href')).toBeNull());
  });

  it('enlaza la flecha y la categoría a la vista de caso único', () => {
    component.case = { ...component.case, slug: 'nulidad-de-traslado' };
    fixture.detectChanges();

    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('a'));
    expect(links.map(link => link.getAttribute('href')))
      .toEqual(['/case-single/nulidad-de-traslado', '/case-single/nulidad-de-traslado']);
  });
});
