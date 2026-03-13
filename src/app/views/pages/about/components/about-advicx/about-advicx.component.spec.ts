import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAdvicxComponent } from './about-advicx.component';

describe('AboutAdvicxComponent', () => {
  let component: AboutAdvicxComponent;
  let fixture: ComponentFixture<AboutAdvicxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [AboutAdvicxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAdvicxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
