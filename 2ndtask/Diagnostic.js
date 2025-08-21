// Diagnostic.js
// Represents a single diagnostic reading

/**
 * @constant {string[]}
 * @description List of valid diagnostic types.
 * - `"rpm"` → Engine revolutions per minute.
 * - `"load"` → Engine load percentage.
 * - `"temp"` → Engine coolant temperature in °C.
 */
const DIAGNOSTIC_TYPES = ['rpm', 'load', 'temp'];

/**
 * @class Diagnostic
 * @classdesc Represents a single diagnostic reading for a vehicle.
 *
 * A diagnostic reading consists of:
 * - A unique identifier (`id`)
 * - A type (`"rpm"`, `"load"`, `"temp"`)
 * - A numeric value representing the measurement
 *
 * Example:
 * ```js
 * import { Diagnostic } from './Diagnostic.js';
 *
 * const d1 = new Diagnostic(1, "rpm", 6500);
 * console.log(d1); // Diagnostic { id: 1, type: "rpm", value: 6500 }
 * ```
 */
class Diagnostic {
  /**
   * Creates a new Diagnostic instance.
   *
   * @constructor
   * @param {number|string} id - A unique identifier for the diagnostic entry.
   * @param {string} type - The type of diagnostic (`"rpm"`, `"load"`, `"temp"`).
   * @param {number} value - The actual measurement value.
   *
   * @throws {Error} If the `type` is not one of the allowed {@link DIAGNOSTIC_TYPES}.
   */
  constructor(id, type, value) {
    if (!DIAGNOSTIC_TYPES.includes(type)) {
      throw new Error(`Invalid diagnostic type: ${type}`);
    }

    /**
     * @property {number|string} id
     * Unique identifier for this diagnostic entry.
     */
    this.id = id;

    /**
     * @property {string} type
     * Type of diagnostic data (`"rpm"`, `"load"`, or `"temp"`).
     */
    this.type = type;

    /**
     * @property {number} value
     * Numeric measurement value corresponding to the diagnostic type.
     */
    this.value = value;
  }
}

export { Diagnostic, DIAGNOSTIC_TYPES };
