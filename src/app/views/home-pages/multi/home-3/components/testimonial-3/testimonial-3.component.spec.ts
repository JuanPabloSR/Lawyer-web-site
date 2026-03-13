import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonial3Component } from './testimonial-3.component';

describe('Testimonial3Component', () => {
  let component: Testimonial3Component;
  let fixture: ComponentFixture<Testimonial3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [Testimonial3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonial3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
