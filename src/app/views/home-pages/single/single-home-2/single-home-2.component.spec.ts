import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHome2Component } from './single-home-2.component';

describe('SingleHome2Component', () => {
  let component: SingleHome2Component;
  let fixture: ComponentFixture<SingleHome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [SingleHome2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
