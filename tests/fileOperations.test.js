const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const dataDir = path.join(__dirname, '../data');
const notesFile = path.join(dataDir, 'notes.txt');

describe('file operations', () => {
  afterAll(() => {
    // Final cleanup
    if (fs.existsSync(dataDir)) {
      fs.rmSync(dataDir, { recursive: true, force: true });
    }
  });

  it('setup script should create a data directory and notes.txt', () => {
    execSync('npm run setup');
    expect(fs.existsSync(dataDir)).toBe(true);
    expect(fs.existsSync(notesFile)).toBe(true);
    expect(fs.readFileSync(notesFile, 'utf8')).toBe('Node.js is awesome!');
  });

  it('append script should add text to notes.txt', () => {
    const appendText = '\nNode.js is event-driven.';
    execSync(`npm run setup && npm run append -- "${appendText}"`);
    const content = fs.readFileSync(notesFile, 'utf8');
    expect(content).toContain('Node.js is awesome!');
    expect(content).toContain(appendText);
  });

  it('cleanup script should remove the data directory', () => {
    execSync('npm run cleanup');
    expect(fs.existsSync(dataDir)).toBe(false);
  });

  it('cleanup script should handle non-existing data directory gracefully', () => {
    let output;
    try {
      output = execSync('npm run cleanup', { encoding: 'utf-8' });
    } catch (error) {
      output = error.stdout;
    }
    expect(output.trim()).toContain(
      'Data directory does not exist, no need to clean up.'
    );
  });
});
