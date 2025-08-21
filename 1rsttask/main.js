// main.js
// Loads diagnostic data from CSV and prints car status

const fs = require('fs');
const path = require('path');
const Diagnostic = require('./Diagnostic');
const GarageMonitor = require('./GarageMonitor');

/**
 * Loads diagnostic entries from a CSV file.
 *
 * The CSV file is expected to have the following format:
 * ```
 * carId,type,value
 * car1,RPM,6500
 * car1,EngineLoad,95
 * car2,CoolantTemp,85
 * ```
 *
 * @function loadDiagnosticsFromCSV
 * @param {string} csvPath - Path to the CSV file.
 * @returns {Array<Object>} An array of diagnostic records.
 * Each record contains:
 * - `carId` {string} → The unique car identifier.
 * - `type` {string} → The type of diagnostic (e.g., "RPM", "EngineLoad").
 * - `value` {number} → The numeric value of the diagnostic.
 *
 * @throws {Error} If the CSV file is empty or invalid.
 *
 * @example
 * const diagnostics = loadDiagnosticsFromCSV("diagnostics.csv");
 * console.log(diagnostics);
 * // Output: [ { carId: 'car1', type: 'RPM', value: 6500 }, ... ]
 */
function loadDiagnosticsFromCSV(csvPath) {
    const data = fs.readFileSync(csvPath, 'utf-8');
    if (!data.trim()) {
        throw new Error('CSV file is empty');
    }
    const lines = data.trim().split('\n');
    if (lines.length < 2) {
        throw new Error('CSV file is invalid');
    }
    // Expecting: carId,type,value
    const diagnostics = [];
    for (let line of lines.slice(1)) { // skip header
        const [carId, type, value] = line.split(',');
        if (!carId || !type || value === undefined) {
            throw new Error('CSV file is invalid');
        }
        diagnostics.push({ carId, type, value: Number(value) });
    }
    return diagnostics;
}

/**
 * Main entry point of the program.
 *
 * - Loads diagnostic data from `diagnostics.csv`.
 * - Initializes a `GarageMonitor`.
 * - Adds all diagnostics to the monitor.
 * - Computes performance scores for each car.
 * - Prints results and alerts to the console.
 *
 * @function main
 * @returns {void}
 *
 * @example
 * // Running "node main.js" will output something like:
 * Car car1: Score=30
 *   ALERT: Severe Engine Stress
 * Car car2: Score=70
 */
function main() {
    const csvPath = path.join(__dirname, 'diagnostics.csv');
    if (!fs.existsSync(csvPath)) {
        console.error('diagnostics.csv not found');
        return;
    }
    const diagnostics = loadDiagnosticsFromCSV(csvPath);
    const monitor = new GarageMonitor();
    for (let d of diagnostics) {
        const diag = new Diagnostic(d.carId, d.type, d.value);
        monitor.addDiagnostic(d.carId, diag);
    }
    const statuses = monitor.getAllStatuses();
    for (let status of statuses) {
        console.log(`Car ${status.carId}: Score=${status.score !== null ? status.score : 'N/A'}`);
        for (let alert of status.alerts) {
            console.log(`  ALERT: ${alert}`);
        }
    }
}

main();
