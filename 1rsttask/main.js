// main.js
// Loads diagnostic data from CSV and prints car status

const fs = require('fs');
const path = require('path');
const Diagnostic = require('./Diagnostic');
const GarageMonitor = require('./GarageMonitor');

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
