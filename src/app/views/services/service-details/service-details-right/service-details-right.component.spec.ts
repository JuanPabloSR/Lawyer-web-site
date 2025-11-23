import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsRightComponent } from './service-details-right.component';

describe('ServiceDetailsRightComponent', () => {
  let component: ServiceDetailsRightComponent;
  let fixture: ComponentFixture<ServiceDetailsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailsRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
