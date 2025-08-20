const GarageMonitor = require('../GarageMonitor');
const Diagnostic = require('../Diagnostic');

describe('GarageMonitor', () => {
  it('should detect Severe Engine Stress', () => {
    const monitor = new GarageMonitor();
    monitor.addDiagnostic('Car1', new Diagnostic('Car1', 'RPM', 6500));
    monitor.addDiagnostic('Car1', new Diagnostic('Car1', 'EngineLoad', 95));
    monitor.addDiagnostic('Car1', new Diagnostic('Car1', 'CoolantTemp', 120));
    const status = monitor.getCarStatus('Car1');
    expect(status.score).toBe(0);
    expect(status.alerts).toContain('Severe Engine Stress');
  });

  it('should detect Sensor Failure', () => {
    const monitor = new GarageMonitor();
    monitor.addDiagnostic('Car2', new Diagnostic('Car2', 'RPM', 3000));
    monitor.addDiagnostic('Car2', new Diagnostic('Car2', 'EngineLoad', 50));
    // Missing CoolantTemp
    const status = monitor.getCarStatus('Car2');
    expect(status.score).toBeNull();
    expect(status.alerts).toContain('Sensor Failure Detected');
  });

  it('should calculate garage average score', () => {
    const monitor = new GarageMonitor();
    // Car1: score 70
    monitor.addDiagnostic('Car1', new Diagnostic('Car1', 'RPM', 2000));
    monitor.addDiagnostic('Car1', new Diagnostic('Car1', 'EngineLoad', 20));
    monitor.addDiagnostic('Car1', new Diagnostic('Car1', 'CoolantTemp', 90));
    // Car2: score 0 (Severe Engine Stress)
    monitor.addDiagnostic('Car2', new Diagnostic('Car2', 'RPM', 6500));
    monitor.addDiagnostic('Car2', new Diagnostic('Car2', 'EngineLoad', 95));
    monitor.addDiagnostic('Car2', new Diagnostic('Car2', 'CoolantTemp', 120));
    // Car1 score = 70, Car2 score = 0
    const statuses = monitor.getAllStatuses();
    const scores = statuses.map(s => s.score).filter(s => s !== null);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    expect(avg).toBe(35);
  });

  it('should not trigger alert if score is exactly 40', () => {
    const monitor = new GarageMonitor();
    monitor.addDiagnostic('Car3', new Diagnostic('Car3', 'RPM', 4000));
    monitor.addDiagnostic('Car3', new Diagnostic('Car3', 'EngineLoad', 40));
    monitor.addDiagnostic('Car3', new Diagnostic('Car3', 'CoolantTemp', 90));
    const status = monitor.getCarStatus('Car3');
    expect(status.score).toBe(40);
    expect(status.alerts.length).toBe(0);
  });
});
