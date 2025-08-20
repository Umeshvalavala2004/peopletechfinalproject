// main.js
import fs from 'fs';
import path from 'path';
import { Diagnostic, DIAGNOSTIC_TYPES } from './Diagnostic.js';
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

const CSV_FILE = path.resolve('./diagnostics.csv');

function parseCSVLine(line) {
  // Simple CSV parser for demo (no quoted fields)
  return line.split(',').map(s => s.trim());
}

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
  // Add cars to garage
  for (const car of carMap.values()) {
    garage.addCar(car);
  }
  garage.analyzeCars();
}

main();
