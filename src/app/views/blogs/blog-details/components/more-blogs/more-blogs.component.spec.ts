import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBlogsComponent } from './more-blogs.component';

describe('MoreBlogsComponent', () => {
  let component: MoreBlogsComponent;
  let fixture: ComponentFixture<MoreBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [MoreBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
