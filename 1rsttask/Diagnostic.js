// Diagnostic.js
// Defines a Diagnostic class (id, type, value)

class Diagnostic {
    constructor(id, type, value) {
        this.id = id;
        this.type = type; // "RPM", "EngineLoad", "CoolantTemp"
        this.value = value;
    }
}

module.exports = Diagnostic;
