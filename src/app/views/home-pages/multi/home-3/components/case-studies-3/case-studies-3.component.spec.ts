import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudies3Component } from './case-studies-3.component';

describe('CaseStudies3Component', () => {
  let component: CaseStudies3Component;
  let fixture: ComponentFixture<CaseStudies3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudies3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudies3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
