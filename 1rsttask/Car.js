// Car.js (ES Module)
// Represents a car with diagnostics and update logic

export class Car {
    constructor(id) {
        this.id = id;
        // Diagnostics: { RPM, EngineLoad, CoolantTemp }
        this.diagnostics = {
            RPM: 0,
            EngineLoad: 0,
            CoolantTemp: 0
        };
    }

    // Randomly update diagnostics to simulate real-time changes
    updateDiagnostics() {
        this.diagnostics.RPM = Math.floor(Math.random() * 7000) + 500; // 500-7500
        this.diagnostics.EngineLoad = Math.floor(Math.random() * 100); // 0-99
        this.diagnostics.CoolantTemp = Math.floor(Math.random() * 60) + 60; // 60-119
    }

    // Compute performance score
    computePerformanceScore() {
        const { RPM, EngineLoad, CoolantTemp } = this.diagnostics;
        if (RPM === undefined || EngineLoad === undefined || CoolantTemp === undefined) {
            return null;
        }
        let score = 100 - (RPM / 100 + EngineLoad * 0.5 + (CoolantTemp - 90) * 2);
        return Math.max(0, Math.round(score));
    }

    // Get a summary of current diagnostics
    getDiagnosticsSummary() {
        return {
            id: this.id,
            ...this.diagnostics,
            score: this.computePerformanceScore()
        };
    }
}
