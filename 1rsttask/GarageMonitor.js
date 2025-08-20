// GarageMonitor.js
// Manages multiple cars, checks for driver abuse & engine issues

const Car = require('./Car');

class GarageMonitor {
    constructor() {
        this.cars = {};
    }

    addDiagnostic(carId, diagnostic) {
        if (!this.cars[carId]) {
            this.cars[carId] = new Car(carId);
        }
        this.cars[carId].addDiagnostic(diagnostic);
    }

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

    getAllStatuses() {
        return Object.keys(this.cars).map(carId => this.getCarStatus(carId));
    }
}

module.exports = GarageMonitor;
