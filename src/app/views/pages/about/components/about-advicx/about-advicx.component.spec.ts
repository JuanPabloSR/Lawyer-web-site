import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAdvicxComponent } from './about-advicx.component';

describe('AboutAdvicxComponent', () => {
  let component: AboutAdvicxComponent;
  let fixture: ComponentFixture<AboutAdvicxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAdvicxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAdvicxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
