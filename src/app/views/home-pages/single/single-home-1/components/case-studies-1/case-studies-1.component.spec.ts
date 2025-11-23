import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudies1Component } from './case-studies-1.component';

describe('CaseStudies1Component', () => {
  let component: CaseStudies1Component;
  let fixture: ComponentFixture<CaseStudies1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudies1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudies1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
