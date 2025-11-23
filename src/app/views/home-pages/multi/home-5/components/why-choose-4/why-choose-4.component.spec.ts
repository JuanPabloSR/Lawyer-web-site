import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoose4Component } from './why-choose-4.component';

describe('WhyChoose4Component', () => {
  let component: WhyChoose4Component;
  let fixture: ComponentFixture<WhyChoose4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChoose4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChoose4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
