// GarageMonitor.js
import { Car } from './Car.js';

const SEVERE_STRESS_THRESHOLD = 40;

class GarageMonitor {
  constructor() {
    this.cars = new Map();
  }

  addCar(car) {
    if (!(car instanceof Car)) return;
    this.cars.set(car.id, car);
  }

  getCar(id) {
    return this.cars.get(id);
  }

  analyzeCars() {
    for (const [id, car] of this.cars.entries()) {
      if (!car.hasAllDiagnostics()) {
        console.log(`Car ${id}: Sensor Failure Detected`);
        continue;
      }
      const score = car.computePerformanceScore();
      console.log(`Car ${id} score=${score}`);
      if (score < SEVERE_STRESS_THRESHOLD) {
        console.log('Severe Engine Stress');
      }
    }
  }
}

export { GarageMonitor, SEVERE_STRESS_THRESHOLD };
