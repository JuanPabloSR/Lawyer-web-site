import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Work3Component } from './work-3.component';

describe('Work3Component', () => {
  let component: Work3Component;
  let fixture: ComponentFixture<Work3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Work3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Work3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
