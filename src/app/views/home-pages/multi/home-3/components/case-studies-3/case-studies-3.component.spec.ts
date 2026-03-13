import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudies3Component } from './case-studies-3.component';

describe('CaseStudies3Component', () => {
  let component: CaseStudies3Component;
  let fixture: ComponentFixture<CaseStudies3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [CaseStudies3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudies3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
