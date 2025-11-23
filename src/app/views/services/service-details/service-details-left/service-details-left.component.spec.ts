import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsLeftComponent } from './service-details-left.component';

describe('ServiceDetailsLeftComponent', () => {
  let component: ServiceDetailsLeftComponent;
  let fixture: ComponentFixture<ServiceDetailsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailsLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
