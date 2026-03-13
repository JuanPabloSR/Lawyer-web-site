import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSidebarComponent } from './service-sidebar.component';

describe('ServiceSidebarComponent', () => {
  let component: ServiceSidebarComponent;
  let fixture: ComponentFixture<ServiceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [ServiceSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
