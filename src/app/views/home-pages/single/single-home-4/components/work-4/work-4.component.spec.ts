import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Work4Component } from './work-4.component';

describe('Work4Component', () => {
  let component: Work4Component;
  let fixture: ComponentFixture<Work4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Work4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Work4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
