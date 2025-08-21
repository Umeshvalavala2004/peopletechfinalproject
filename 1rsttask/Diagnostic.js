// Diagnostic.js
// Defines a Diagnostic class (id, type, value)

/**
 * @class Diagnostic
 * @classdesc Represents a diagnostic measurement from a vehicle system.
 *
 * This class stores diagnostic information such as RPM, engine load, or coolant temperature.
 * Each diagnostic entry has a unique identifier, a type (string describing what is measured),
 * and a value (the actual measurement).
 *
 * Example:
 * ```js
 * const d1 = new Diagnostic(1, "RPM", 6500);
 * console.log(d1); // Diagnostic { id: 1, type: "RPM", value: 6500 }
 * ```
 */
class Diagnostic {
    /**
     * Creates a new Diagnostic object.
     *
     * @constructor
     * @param {number} id - A unique identifier for the diagnostic entry.
     * @param {string} type - The type of diagnostic measurement (e.g., `"RPM"`, `"EngineLoad"`, `"CoolantTemp"`).
     * @param {number|string} value - The actual measurement value (e.g., `6500` for RPM, `95` for engine load, `85` for coolant temp).
     */
    constructor(id, type, value) {
        /**
         * @property {number} id
         * A unique identifier for this diagnostic entry.
         */
        this.id = id;

        /**
         * @property {string} type
         * The type of diagnostic data.
         * - `"RPM"` for engine revolutions per minute
         * - `"EngineLoad"` for load percentage
         * - `"CoolantTemp"` for engine coolant temperature
         */
        this.type = type;

        /**
         * @property {number|string} value
         * The measurement value corresponding to the diagnostic type.
         */
        this.value = value;
    }
}

module.exports = Diagnostic;
