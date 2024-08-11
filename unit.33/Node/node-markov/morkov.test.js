const fs = require("fs");
const path = require("path");
const { MarkovMachine } = require('./markov');

// Load the contents of eggs.txt for testing
const eggsTextPath = path.join(__dirname, 'eggs.txt');
const eggsText = fs.readFileSync(eggsTextPath, 'utf8');

describe('MarkovMachine', () => {
  
  test('should create chains correctly from eggs.txt', () => {
    const markovMachine = new MarkovMachine(eggsText);
    const chains = markovMachine.chains;

    // Example assertions for checking if chains are set up correctly
    // Note: Adjust these based on your specific text content
    expect(chains.has("I")).toBe(true);
    expect(chains.has("do")).toBe(true);
    expect(chains.get("I")).toContain("do");
    expect(chains.get("do")).toContain("not");
  });

  test('should generate text with correct length', () => {
    const markovMachine = new MarkovMachine(eggsText);

    const generatedText = markovMachine.makeText(50); // Generate a smaller piece for testing
    const words = generatedText.split(" ");

    expect(words.length).toBeLessThanOrEqual(50);
  });

});

