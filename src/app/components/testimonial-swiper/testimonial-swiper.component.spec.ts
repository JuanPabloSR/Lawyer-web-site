import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSwiperComponent } from './testimonial-swiper.component';

describe('TestimonialSwiperComponent', () => {
  let component: TestimonialSwiperComponent;
  let fixture: ComponentFixture<TestimonialSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [TestimonialSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
