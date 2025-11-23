import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailRightComponent } from './blog-detail-right.component';

describe('BlogDetailRightComponent', () => {
  let component: BlogDetailRightComponent;
  let fixture: ComponentFixture<BlogDetailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
