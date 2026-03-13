import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailRightComponent } from './case-detail-right.component';

describe('CaseDetailRightComponent', () => {
  let component: CaseDetailRightComponent;
  let fixture: ComponentFixture<CaseDetailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [CaseDetailRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDetailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
