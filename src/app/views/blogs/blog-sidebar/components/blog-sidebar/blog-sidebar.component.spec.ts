import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSidebarComponent } from './blog-sidebar.component';

describe('BlogSidebarComponent', () => {
  let component: BlogSidebarComponent;
  let fixture: ComponentFixture<BlogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [BlogSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
