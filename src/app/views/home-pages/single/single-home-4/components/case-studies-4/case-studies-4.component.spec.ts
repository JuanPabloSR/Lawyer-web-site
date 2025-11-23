import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudies4Component } from './case-studies-4.component';

describe('CaseStudies4Component', () => {
  let component: CaseStudies4Component;
  let fixture: ComponentFixture<CaseStudies4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudies4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudies4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
