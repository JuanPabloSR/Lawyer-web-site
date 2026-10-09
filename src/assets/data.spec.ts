import { caseDetails } from './data';

describe('caseDetails', () => {
  it('cada caso tiene un slug único en minúsculas y con guiones', () => {
    const slugs = caseDetails.map(c => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach(slug => expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/));
  });

  it('cada caso trae el contenido que pinta la vista de caso único', () => {
    caseDetails.forEach(c => {
      expect(c.title).withContext(c.slug).toBeTruthy();
      expect(c.category).withContext(c.slug).toBeTruthy();
      expect(c.image).withContext(c.slug).toBeTruthy();
      expect(c.heading).withContext(c.slug).toBeTruthy();
      expect(c.intro.length).withContext(c.slug).toBeGreaterThan(0);
      expect(c.strategy.length).withContext(c.slug).toBeGreaterThan(0);
      expect(c.benefits.length).withContext(c.slug).toBe(6);
      expect(c.result).withContext(c.slug).toBeTruthy();
    });
  });

  it('el primer caso es el que se muestra en /case-single y solo vive en el inicio', () => {
    expect(caseDetails[0].slug).toBe('reliquidacion-exitosa');
    expect(caseDetails[0].homeOnly).toBeTrue();
  });

  it('la lista de /case-study conserva sus 9 casos', () => {
    expect(caseDetails.filter(c => !c.homeOnly).length).toBe(9);
  });
});
