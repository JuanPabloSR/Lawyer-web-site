import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHeader5Component } from './single-header-5.component';

describe('SingleHeader5Component', () => {
  let component: SingleHeader5Component;
  let fixture: ComponentFixture<SingleHeader5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [SingleHeader5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHeader5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
