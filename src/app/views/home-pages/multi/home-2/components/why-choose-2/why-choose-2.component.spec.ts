import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoose2Component } from './why-choose-2.component';

describe('WhyChoose2Component', () => {
  let component: WhyChoose2Component;
  let fixture: ComponentFixture<WhyChoose2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [WhyChoose2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChoose2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
