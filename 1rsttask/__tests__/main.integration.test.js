const fs = require('fs');
const path = require('path');

describe('Main Integration', () => {
  const mainPath = path.join(__dirname, '../main.js');
  const csvPath = path.join(__dirname, '../diagnostics.csv');
  const backupPath = path.join(__dirname, '../diagnostics.csv.bak');

  afterEach(() => {
    // Restore CSV if it was backed up
    if (fs.existsSync(backupPath)) {
      fs.renameSync(backupPath, csvPath);
    }
  });

  it('should throw error if CSV is empty', () => {
    if (fs.existsSync(csvPath)) {
      fs.renameSync(csvPath, backupPath);
    }
    fs.writeFileSync(csvPath, '');
    expect(() => require(mainPath)).toThrow();
  });

  it('should throw error if CSV is invalid', () => {
    if (fs.existsSync(csvPath)) {
      fs.renameSync(csvPath, backupPath);
    }
    fs.writeFileSync(csvPath, 'invalid,data,here');
    expect(() => require(mainPath)).toThrow();
  });
});
