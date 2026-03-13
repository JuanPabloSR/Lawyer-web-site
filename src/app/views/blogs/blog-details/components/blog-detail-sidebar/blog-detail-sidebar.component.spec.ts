import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailSidebarComponent } from './blog-detail-sidebar.component';

describe('BlogDetailSidebarComponent', () => {
  let component: BlogDetailSidebarComponent;
  let fixture: ComponentFixture<BlogDetailSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [BlogDetailSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
