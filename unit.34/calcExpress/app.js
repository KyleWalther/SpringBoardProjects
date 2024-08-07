const express = require("express");
const app = express();

app.use(express.json());

// Utility functions to calculate mean, median, and mode
function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b);
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    return numbers[middle];
  }
}

function calculateMode(numbers) {
  const frequency = {};
  let maxFrequency = 0;
  let mode = null;

  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      mode = num;
    }
  }

  return mode;
}

// Helper function to validate and parse numbers from query
function getNumbersFromQuery(queryString) {
  if (!queryString) {
    throw new ExpressError("nums are required", 400);
  }

  const numStrings = queryString.split(",");
  const numbers = numStrings.map((num) => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) {
      throw new ExpressError(`${num} is not a number.`, 400);
    }
    return parsed;
  });

  return numbers;
}

// Custom error class for handling express errors
class ExpressError extends Error {
  constructor(msg, status) {
    super(msg);
    this.status = status;
  }
}

// Route for calculating the mean
app.get("/mean", (req, res, next) => {
  try {
    const numbers = getNumbersFromQuery(req.query.nums);
    const mean = calculateMean(numbers);
    return res.json({ operation: "mean", value: mean });
  } catch (err) {
    return next(err);
  }
});

// Route for calculating the median
app.get("/median", (req, res, next) => {
  try {
    const numbers = getNumbersFromQuery(req.query.nums);
    const median = calculateMedian(numbers);
    return res.json({ operation: "median", value: median });
  } catch (err) {
    return next(err);
  }
});

// Route for calculating the mode
app.get("/mode", (req, res, next) => {
  try {
    const numbers = getNumbersFromQuery(req.query.nums);
    const mode = calculateMode(numbers);
    return res.json({ operation: "mode", value: mode });
  } catch (err) {
    return next(err);
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});

