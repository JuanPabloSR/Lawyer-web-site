import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { provideRouter, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';

import { CaseStudyDetailComponent } from './case-study-detail.component';
import { caseDetails } from '@/assets/data';

@Component({ template: '' })
class CaseStudyListStubComponent { }

describe('CaseStudyDetailComponent', () => {
  let component: CaseStudyDetailComponent;
  let fixture: ComponentFixture<CaseStudyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter([])],
      imports: [CaseStudyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('según la URL', () => {
    let harness: RouterTestingHarness;

    const open = async (url: string) => {
      const detail = await harness.navigateByUrl(url, CaseStudyDetailComponent);
      return detail;
    };
    const heading = () => harness.routeNativeElement!.querySelector('.details-content h2')!.textContent!.trim();
    const moreCaseTitles = () =>
      Array.from(harness.routeNativeElement!.querySelectorAll('.case-page-sec .case1-box .content-area > p'))
        .map(p => p.textContent!.trim());

    beforeEach(async () => {
      TestBed.resetTestingModule();
      await TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [provideRouter([
          { path: 'case-single', component: CaseStudyDetailComponent },
          { path: 'case-single/:slug', component: CaseStudyDetailComponent },
          { path: 'case-study', component: CaseStudyListStubComponent },
        ])],
        imports: [CaseStudyDetailComponent]
      }).compileComponents();
      harness = await RouterTestingHarness.create();
    });

    it('muestra el caso que indica el slug', async () => {
      await open('/case-single/nulidad-de-traslado');
      const esperado = caseDetails.find(c => c.slug === 'nulidad-de-traslado')!;
      expect(heading()).toBe(esperado.heading);
    });

    it('sin slug muestra el primer caso, como hasta ahora', async () => {
      await open('/case-single');
      expect(heading()).toBe(caseDetails[0].heading);
    });

    it('"Ver más casos" sugiere tres casos sin repetir el actual', async () => {
      await open('/case-single/casos-de-exito-en-pensiones');
      const titulos = moreCaseTitles();
      expect(titulos.length).toBe(3);
      expect(titulos).not.toContain('Casos de Éxito en Pensiones');
    });

    it('redirige a /case-study si el slug no existe', async () => {
      await open('/case-single/no-existe');
      harness.detectChanges();
      await harness.fixture.whenStable();
      expect(TestBed.inject(Router).url).toBe('/case-study');
    });
  });
});
