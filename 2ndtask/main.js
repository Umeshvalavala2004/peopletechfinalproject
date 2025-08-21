// main.js
import fs from 'fs';
import path from 'path';
import { Diagnostic } from './Diagnostic.js';
import { Car } from './Car.js';
import { GarageMonitor } from './GarageMonitor.js';

// Example CSV format:
// car_id,type,value
// 0,rpm,6500
// 0,load,95
// 0,temp,120
// 1,rpm,3000
// 1,load,40
// 1,temp,85

/**
 * @constant {string}
 * @brief Path to the diagnostics CSV file.
 */
const CSV_FILE = path.resolve('./diagnostics.csv');

/**
 * @function parseCSVLine
 * @brief Splits a line of CSV text into fields.
 *
 * Simple CSV parser that splits by commas (no quoted field support).
 *
 * @param {string} line - A single line from the CSV file.
 * @returns {string[]} Array of parsed field values.
 *
 * @example
 * parseCSVLine("0,rpm,6500");
 * // ["0", "rpm", "6500"]
 */
function parseCSVLine(line) {
  return line.split(',').map(s => s.trim());
}

/**
 * @function loadDiagnosticsFromCSV
 * @brief Loads diagnostic data from a CSV file and creates Diagnostic objects.
 *
 * Each line must follow the format:
 * ```
 * car_id,type,value
 * ```
 * - `car_id`: string or number identifier for the car
 * - `type`: diagnostic type (`rpm`, `load`, `temp`)
 * - `value`: numeric diagnostic reading
 *
 * Lines with missing or invalid values are skipped, and errors are logged.
 *
 * @param {string} filePath - Path to the CSV file.
 * @returns {Diagnostic[]} Array of valid Diagnostic objects.
 *
 * @throws {Error} If the file cannot be read.
 *
 * @example
 * const diags = loadDiagnosticsFromCSV("diagnostics.csv");
 * console.log(diags[0].type); // "rpm"
 */
function loadDiagnosticsFromCSV(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split(/\r?\n/).filter(Boolean);
  const diagnostics = [];
  for (let i = 1; i < lines.length; i++) { // skip header
    const [carId, type, value] = parseCSVLine(lines[i]);
    if (!carId || !type || isNaN(Number(value))) {
      console.log(`Malformed diagnostic at line ${i + 1}`);
      continue;
    }
    try {
      diagnostics.push(new Diagnostic(carId, type, Number(value)));
    } catch (e) {
      console.log(`Error: ${e.message} at line ${i + 1}`);
    }
  }
  return diagnostics;
}

/**
 * @function main
 * @brief Entry point for the garage monitoring program.
 *
 * - Loads diagnostics from the CSV file
 * - Groups them by car ID
 * - Creates Car objects and adds diagnostics
 * - Adds cars to the GarageMonitor
 * - Analyzes and logs car statuses
 *
 * @returns {void}
 */
function main() {
  const diagnostics = loadDiagnosticsFromCSV(CSV_FILE);
  const garage = new GarageMonitor();

  // Group diagnostics by car
  const carMap = new Map();
  for (const diag of diagnostics) {
    if (!carMap.has(diag.id)) {
      carMap.set(diag.id, new Car(diag.id));
    }
    carMap.get(diag.id).addDiagnostic(diag);
  }

  // Add cars to garage and analyze
  for (const car of carMap.values()) {
    garage.addCar(car);
  }
  garage.analyzeCars();
}

main();
