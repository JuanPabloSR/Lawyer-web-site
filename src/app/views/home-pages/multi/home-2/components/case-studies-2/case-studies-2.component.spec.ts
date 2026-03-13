import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudies2Component } from './case-studies-2.component';

describe('CaseStudies2Component', () => {
  let component: CaseStudies2Component;
  let fixture: ComponentFixture<CaseStudies2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [CaseStudies2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudies2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
