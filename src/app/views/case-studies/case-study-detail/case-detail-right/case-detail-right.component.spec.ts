import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailRightComponent } from './case-detail-right.component';

describe('CaseDetailRightComponent', () => {
  let component: CaseDetailRightComponent;
  let fixture: ComponentFixture<CaseDetailRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseDetailRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDetailRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
