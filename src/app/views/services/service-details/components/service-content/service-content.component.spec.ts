import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContentComponent } from './service-content.component';

describe('ServiceContentComponent', () => {
  let component: ServiceContentComponent;
  let fixture: ComponentFixture<ServiceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [ServiceContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
