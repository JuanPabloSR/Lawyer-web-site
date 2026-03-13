import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyDetailComponent } from './case-study-detail.component';

describe('CaseStudyDetailComponent', () => {
  let component: CaseStudyDetailComponent;
  let fixture: ComponentFixture<CaseStudyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [CaseStudyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
