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
});
