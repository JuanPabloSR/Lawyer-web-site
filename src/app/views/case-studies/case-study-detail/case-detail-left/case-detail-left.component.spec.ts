import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailLeftComponent } from './case-detail-left.component';

describe('CaseDetailLeftComponent', () => {
  let component: CaseDetailLeftComponent;
  let fixture: ComponentFixture<CaseDetailLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseDetailLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDetailLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
