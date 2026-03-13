import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailRightComponent } from './blog-detail-right.component';

describe('BlogDetailRightComponent', () => {
  let component: BlogDetailRightComponent;
  let fixture: ComponentFixture<BlogDetailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [BlogDetailRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
