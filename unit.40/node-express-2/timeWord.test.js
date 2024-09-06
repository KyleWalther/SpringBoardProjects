const timeToWords = require('./path/to/your/timeToWordsFunction');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});


function testTimeToWords() {
  const testCases = [
    { input: "00:00", expected: "twelve o'clock am" },
    { input: "01:00", expected: "one o'clock am" },
    { input: "09:05", expected: "nine oh five am" },
    { input: "10:15", expected: "ten fifteen am" },
    { input: "12:30", expected: "twelve thirty pm" },
    { input: "13:45", expected: "one forty-five pm" },
    { input: "18:59", expected: "six fifty-nine pm" },
    { input: "23:59", expected: "eleven fifty-nine pm" },
    { input: "07:10", expected: "seven ten am" },
    { input: "22:22", expected: "ten twenty-two pm" },
    { input: "15:00", expected: "three o'clock pm" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = timeToWords(input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
    console.log(`Pass: ${result === expected}`);
    console.log('---');
  });
}

// Run the tests
testTimeToWords();
