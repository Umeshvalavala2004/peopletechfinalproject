// GarageMonitor.js
// Manages multiple cars, checks for driver abuse & engine issues

const Car = require('./Car');

/**
 * @class GarageMonitor
 * @classdesc Monitors multiple cars in a garage by tracking diagnostics, 
 * computing performance scores, and generating alerts for engine stress 
 * or sensor issues.
 *
 * This class acts as a central manager for all vehicles being monitored. 
 * Each car is tracked using its unique ID, and diagnostics can be added 
 * dynamically. The monitor evaluates performance and raises alerts for 
 * abnormal conditions.
 *
 * Example:
 * ```js
 * const GarageMonitor = require('./GarageMonitor');
 * const Diagnostic = require('./Diagnostic');
 *
 * const monitor = new GarageMonitor();
 * monitor.addDiagnostic("car1", new Diagnostic(1, "RPM", 6500));
 * monitor.addDiagnostic("car1", new Diagnostic(2, "EngineLoad", 95));
 * 
 * console.log(monitor.getCarStatus("car1"));
 * // { carId: 'car1', score: 30, alerts: ['Severe Engine Stress'] }
 * ```
 */
class GarageMonitor {
    /**
     * Creates a new GarageMonitor instance.
     * @constructor
     */
    constructor() {
        /**
         * @property {Object.<string, Car>} cars
         * A dictionary (map) of cars being monitored.
         * - Key: `carId` (string)
         * - Value: `Car` instance
         */
        this.cars = {};
    }

    /**
     * Adds a diagnostic entry for a specific car.
     * If the car does not exist yet, it creates a new `Car` instance.
     *
     * @param {string} carId - The unique identifier of the car.
     * @param {Diagnostic} diagnostic - A diagnostic object (e.g., RPM, EngineLoad, CoolantTemp).
     */
    addDiagnostic(carId, diagnostic) {
        if (!this.cars[carId]) {
            this.cars[carId] = new Car(carId);
        }
        this.cars[carId].addDiagnostic(diagnostic);
    }

    /**
     * Retrieves the performance status of a specific car.
     *
     * @param {string} carId - The unique identifier of the car.
     * @returns {Object|null} Car status object, or `null` if the car is not found.
     * @returns {string} return.carId - The car's unique identifier.
     * @returns {number|null} return.score - The performance score of the car (or `null` if sensors failed).
     * @returns {string[]} return.alerts - List of alerts (e.g., "Sensor Failure Detected", "Severe Engine Stress").
     */
    getCarStatus(carId) {
        const car = this.cars[carId];
        if (!car) return null;
        const score = car.computePerformanceScore();
        let alerts = [];
        if (score === null) {
            alerts.push('Sensor Failure Detected');
        } else if (score < 40) {
            alerts.push('Severe Engine Stress');
        }
        return { carId, score, alerts };
    }

    /**
     * Retrieves the performance status of all monitored cars.
     *
     * @returns {Array<Object>} An array of car status objects.
     * Each object contains:
     * - `carId` (string)
     * - `score` (number|null)
     * - `alerts` (string[])
     */
    getAllStatuses() {
        return Object.keys(this.cars).map(carId => this.getCarStatus(carId));
    }
}

module.exports = GarageMonitor;
