import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonial5Component } from './testimonial-5.component';

describe('Testimonial5Component', () => {
  let component: Testimonial5Component;
  let fixture: ComponentFixture<Testimonial5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [Testimonial5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonial5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
