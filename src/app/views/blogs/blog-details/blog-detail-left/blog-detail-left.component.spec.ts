import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailLeftComponent } from './blog-detail-left.component';

describe('BlogDetailLeftComponent', () => {
  let component: BlogDetailLeftComponent;
  let fixture: ComponentFixture<BlogDetailLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
