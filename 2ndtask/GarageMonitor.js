// GarageMonitor.js
import { Car } from './Car.js';

const SEVERE_STRESS_THRESHOLD = 40;

/**
 * @class GarageMonitor
 * @brief Monitors multiple cars in a garage and analyzes their diagnostics.
 *
 * The GarageMonitor class maintains a collection of Car objects, allows
 * adding and retrieving cars, and performs diagnostic analysis to detect
 * engine stress or sensor failures.
 */
class GarageMonitor {
  /**
   * @constructor
   * @brief Initializes an empty garage monitor.
   *
   * Creates a Map to store cars with their IDs as keys.
   */
  constructor() {
    /** 
     * @property {Map<number, Car>} cars
     * @brief A map of car IDs to their corresponding Car objects.
     */
    this.cars = new Map();
  }

  /**
   * @function addCar
   * @brief Adds a Car to the garage.
   *
   * @param {Car} car - The Car object to be added.
   * @return {void}
   *
   * If the input is not an instance of Car, it will be ignored.
   */
  addCar(car) {
    if (!(car instanceof Car)) return;
    this.cars.set(car.id, car);
  }

  /**
   * @function getCar
   * @brief Retrieves a Car from the garage by its ID.
   *
   * @param {number} id - Unique identifier of the car.
   * @return {Car|undefined} The Car object if found, otherwise undefined.
   */
  getCar(id) {
    return this.cars.get(id);
  }

  /**
   * @function analyzeCars
   * @brief Analyzes all cars in the garage for diagnostics.
   *
   * Iterates through all cars, checks for missing diagnostics,
   * computes performance scores, and logs results. If a car's
   * score falls below the SEVERE_STRESS_THRESHOLD, a warning
   * for severe engine stress is logged.
   *
   * @return {void}
   */
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
