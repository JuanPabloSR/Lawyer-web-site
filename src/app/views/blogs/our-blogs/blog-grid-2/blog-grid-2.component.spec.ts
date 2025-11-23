import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGrid2Component } from './blog-grid-2.component';

describe('BlogGrid2Component', () => {
  let component: BlogGrid2Component;
  let fixture: ComponentFixture<BlogGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogGrid2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
