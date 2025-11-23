import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Services5Component } from './services-5.component';

describe('Services5Component', () => {
  let component: Services5Component;
  let fixture: ComponentFixture<Services5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Services5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
