// Car.js
import { Diagnostic, DIAGNOSTIC_TYPES } from './Diagnostic.js';

// Constants for performance calculation
const MAX_SCORE = 100;
const RPM_DIVISOR = 100;
const LOAD_FACTOR = 0.5;
const TEMP_BASE = 90;
const TEMP_FACTOR = 2;

class Car {
  constructor(id) {
    this.id = id;
    this.diagnostics = {};
  }

  addDiagnostic(diagnostic) {
    if (!(diagnostic instanceof Diagnostic)) return;
    this.diagnostics[diagnostic.type] = diagnostic.value;
  }

  hasAllDiagnostics() {
    return DIAGNOSTIC_TYPES.every(type => this.diagnostics[type] !== undefined);
  }

  computePerformanceScore() {
    if (!this.hasAllDiagnostics()) return null;
    const rpm = this.diagnostics['rpm'];
    const load = this.diagnostics['load'];
    const temp = this.diagnostics['temp'];
    return (
      MAX_SCORE -
      (rpm / RPM_DIVISOR + load * LOAD_FACTOR + (temp - TEMP_BASE) * TEMP_FACTOR)
    );
  }
}

export { Car, MAX_SCORE, RPM_DIVISOR, LOAD_FACTOR, TEMP_BASE, TEMP_FACTOR };
