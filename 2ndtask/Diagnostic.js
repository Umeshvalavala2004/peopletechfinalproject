// Diagnostic.js
// Represents a single diagnostic reading

const DIAGNOSTIC_TYPES = ['rpm', 'load', 'temp'];

class Diagnostic {
  constructor(id, type, value) {
    if (!DIAGNOSTIC_TYPES.includes(type)) {
      throw new Error(`Invalid diagnostic type: ${type}`);
    }
    this.id = id;
    this.type = type;
    this.value = value;
  }
}

export { Diagnostic, DIAGNOSTIC_TYPES };
