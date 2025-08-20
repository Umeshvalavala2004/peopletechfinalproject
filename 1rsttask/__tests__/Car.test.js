const Car = require('../Car');
const Diagnostic = require('../Diagnostic');

describe('Car', () => {
  it('should compute performance score correctly', () => {
    const car = new Car('Car1');
    car.addDiagnostic(new Diagnostic('Car1', 'RPM', 6500));
    car.addDiagnostic(new Diagnostic('Car1', 'EngineLoad', 95));
    car.addDiagnostic(new Diagnostic('Car1', 'CoolantTemp', 120));
    // score = 100 - (6500/100 + 95*0.5 + (120-90)*2) = 100 - (65 + 47.5 + 60) = 100 - 172.5 = -72.5 => 0
    expect(car.computePerformanceScore()).toBe(0);
  });

  it('should return null if a diagnostic is missing', () => {
    const car = new Car('Car2');
    car.addDiagnostic(new Diagnostic('Car2', 'RPM', 3000));
    car.addDiagnostic(new Diagnostic('Car2', 'EngineLoad', 50));
    // Missing CoolantTemp
    expect(car.computePerformanceScore()).toBeNull();
  });

  it('should not trigger alert if score is exactly 40', () => {
    const car = new Car('Car3');
    car.addDiagnostic(new Diagnostic('Car3', 'RPM', 2000));
    car.addDiagnostic(new Diagnostic('Car3', 'EngineLoad', 20));
    car.addDiagnostic(new Diagnostic('Car3', 'CoolantTemp', 90));
    // score = 100 - (2000/100 + 20*0.5 + (90-90)*2) = 100 - (20 + 10 + 0) = 70
    // Adjust values to get exactly 40
    car.diagnostics['RPM'].value = 4000; // 40
    car.diagnostics['EngineLoad'].value = 40; // 20
    // score = 100 - (40 + 20 + 0) = 40
    expect(car.computePerformanceScore()).toBe(40);
  });
});
