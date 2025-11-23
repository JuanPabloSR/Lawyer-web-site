import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogs5Component } from './blogs-5.component';

describe('Blogs5Component', () => {
  let component: Blogs5Component;
  let fixture: ComponentFixture<Blogs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogs5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
