import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailLeftComponent } from './blog-detail-left.component';

describe('BlogDetailLeftComponent', () => {
  let component: BlogDetailLeftComponent;
  let fixture: ComponentFixture<BlogDetailLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [BlogDetailLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
