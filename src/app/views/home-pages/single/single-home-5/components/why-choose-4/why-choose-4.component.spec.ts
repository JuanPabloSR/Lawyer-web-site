import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoose4Component } from './why-choose-4.component';

describe('WhyChoose4Component', () => {
  let component: WhyChoose4Component;
  let fixture: ComponentFixture<WhyChoose4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [WhyChoose4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChoose4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
