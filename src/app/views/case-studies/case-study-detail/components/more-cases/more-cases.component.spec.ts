import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCasesComponent } from './more-cases.component';

describe('MoreCasesComponent', () => {
  let component: MoreCasesComponent;
  let fixture: ComponentFixture<MoreCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [MoreCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sin entrada muestra los tres primeros casos de la lista', () => {
    expect(fixture.nativeElement.querySelectorAll('.case1-box').length).toBe(3);
  });

  it('muestra los casos recibidos', () => {
    component.cases = [
      { image: 'a.webp', category: 'Derecho Laboral', title: 'Caso A', slug: 'caso-a' },
      { image: 'b.webp', category: 'Derecho Pensional', title: 'Caso B', slug: 'caso-b' },
    ];
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('.case1-box');
    expect(cards.length).toBe(2);
    expect(cards[1].querySelector('a').getAttribute('href')).toBe('/case-single/caso-b');
  });
});
