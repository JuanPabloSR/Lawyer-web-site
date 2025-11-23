import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBlogsComponent } from './more-blogs.component';

describe('MoreBlogsComponent', () => {
  let component: MoreBlogsComponent;
  let fixture: ComponentFixture<MoreBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
