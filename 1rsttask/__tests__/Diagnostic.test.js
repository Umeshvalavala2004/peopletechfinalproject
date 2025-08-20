const Diagnostic = require('../Diagnostic');

describe('Diagnostic', () => {
  it('should create a diagnostic with correct properties', () => {
    const diag = new Diagnostic('Car1', 'RPM', 6500);
    expect(diag.id).toBe('Car1');
    expect(diag.type).toBe('RPM');
    expect(diag.value).toBe(6500);
  });
});
