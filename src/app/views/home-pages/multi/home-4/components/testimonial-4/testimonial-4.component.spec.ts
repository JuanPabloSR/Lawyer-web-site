import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonial4Component } from './testimonial-4.component';

describe('Testimonial4Component', () => {
  let component: Testimonial4Component;
  let fixture: ComponentFixture<Testimonial4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [Testimonial4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonial4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
