import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultation2Component } from './consultation-2.component';

describe('Consultation2Component', () => {
  let component: Consultation2Component;
  let fixture: ComponentFixture<Consultation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consultation2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consultation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
