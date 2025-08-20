# Garage Monitoring System

A modern Garage Monitoring System that loads car diagnostics from CSV, computes performance scores, and detects engine issues in real time.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js

---

## Project Structure & Main Components

### Backend Classes

- **Diagnostic.js**
  - Represents a single diagnostic entry (id, type, value).
  - Types: `RPM`, `EngineLoad`, `CoolantTemp`.

- **Car.js**
  - Stores diagnostics for a car.
  - Computes the car's performance score using the formula:
    ```js
    score = 100 - (rpm / 100 + engineLoad * 0.5 + (coolantTemp - 90) * 2)
    ```

- **GarageMonitor.js**
  - Manages multiple cars.
  - Computes average score across all cars.
  - Detects issues like severe engine stress and sensor failures.

- **main.js**
  - Loads diagnostics from a CSV file.
  - Initializes the system and prints car status and alerts to the console.

### Frontend Component

- **TestRunner.jsx**
  - UI component to run predefined test cases.
  - Displays results as ✅ PASS or ❌ FAIL after clicking "Run Tests".

---

## Sample Input/Output

### Example CSV Input

```
carId,type,value
Car1,RPM,6500
Car1,EngineLoad,95
Car1,CoolantTemp,120
Car2,RPM,2000
Car2,EngineLoad,20
Car2,CoolantTemp,90
```

### Console Output

```
Car Car1: Score=0
  ALERT: Severe Engine Stress
Car Car2: Score=70
```

### TestRunner UI Output

After clicking **Run Tests**:

```
✅ Diagnostic class: PASS
✅ Car score calculation: PASS
✅ GarageMonitor alerts: PASS
❌ CSV error handling: FAIL
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Backend

```bash
node main.js
```

### 3. Run the Frontend (React + Vite)

```bash
npm run dev
```

### 4. Run Automated Tests

```bash
npm test
```

---

## Trainer Notes

- Ensure your CSV file is in the project root and follows the sample format.
- The system will alert for missing diagnostics or severe engine stress (score < 40).
- Use the TestRunner UI to quickly verify system behavior from the browser.

---

Happy Monitoring!
