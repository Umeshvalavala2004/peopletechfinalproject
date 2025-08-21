// Car.js
import { Diagnostic, DIAGNOSTIC_TYPES } from './Diagnostic.js';

// -----------------------------
// Constants for performance calculation
// -----------------------------

/**
 * @constant {number}
 * @description Maximum possible performance score for a car.
 */
const MAX_SCORE = 100;

/**
 * @constant {number}
 * @description Divisor applied to RPM when computing the performance penalty.
 */
const RPM_DIVISOR = 100;

/**
 * @constant {number}
 * @description Factor applied to engine load when computing the performance penalty.
 */
const LOAD_FACTOR = 0.5;

/**
 * @constant {number}
 * @description Base temperature (°C) for computing temperature penalty.
 */
const TEMP_BASE = 90;

/**
 * @constant {number}
 * @description Factor applied to the difference between coolant temperature and base temperature.
 */
const TEMP_FACTOR = 2;

/**
 * @class Car
 * @classdesc Represents a car being monitored with diagnostic data (RPM, load, and temperature).
 *
 * Each `Car` instance:
 * - Tracks diagnostic readings for different types
 * - Computes a performance score based on diagnostic values
 * - Detects when some readings are missing
 *
 * Example:
 * ```js
 * import { Car } from './Car.js';
 * import { Diagnostic } from './Diagnostic.js';
 *
 * const car = new Car("car1");
 * car.addDiagnostic(new Diagnostic(1, "rpm", 6500));
 * car.addDiagnostic(new Diagnostic(2, "load", 95));
 * car.addDiagnostic(new Diagnostic(3, "temp", 85));
 *
 * console.log(car.computePerformanceScore());
 * // Example: 30 (low score due to engine stress)
 * ```
 */
class Car {
  /**
   * Creates a new Car instance.
   *
   * @constructor
   * @param {string} id - Unique identifier for the car.
   */
  constructor(id) {
    /**
     * @property {string} id
     * Unique identifier of this car.
     */
    this.id = id;

    /**
     * @property {Object.<string, number>}
     * Stores the latest diagnostic values.
     * - Keys: diagnostic types (`"rpm"`, `"load"`, `"temp"`)
     * - Values: numeric measurement values
     */
    this.diagnostics = {};
  }

  /**
   * Adds a diagnostic entry for the car.
   * If a diagnostic of the same type already exists, it is replaced.
   *
   * @param {Diagnostic} diagnostic - The diagnostic reading to add.
   */
  addDiagnostic(diagnostic) {
    if (!(diagnostic instanceof Diagnostic)) return;
    this.diagnostics[diagnostic.type] = diagnostic.value;
  }

  /**
   * Checks whether all required diagnostics (`rpm`, `load`, `temp`) are available.
   *
   * @returns {boolean} True if all diagnostics are present, false otherwise.
   */
  hasAllDiagnostics() {
    return DIAGNOSTIC_TYPES.every(type => this.diagnostics[type] !== undefined);
  }

  /**
   * Computes the performance score for the car.
   *
   * Formula:
   * ```
   * score = MAX_SCORE
   *         - (rpm / RPM_DIVISOR)
   *         - (load * LOAD_FACTOR)
   *         - ((temp - TEMP_BASE) * TEMP_FACTOR)
   * ```
   *
   * - If not all diagnostics are available, returns `null`.
   * - Lower scores indicate higher engine stress.
   *
   * @returns {number|null} Performance score (0–100) or `null` if diagnostics are incomplete.
   */
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
