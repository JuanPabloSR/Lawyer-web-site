import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGrid3Component } from './blog-grid-3.component';

describe('BlogGrid3Component', () => {
  let component: BlogGrid3Component;
  let fixture: ComponentFixture<BlogGrid3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogGrid3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGrid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
