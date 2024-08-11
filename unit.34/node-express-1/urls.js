const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Check if the filename is provided as a command line argument
if (process.argv.length < 3) {
  console.error('Usage: node urls.js FILENAME');
  process.exit(1);
}

// Get the filename from the command line arguments
const filename = process.argv[2];

// Read the file and process each line
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  // Split the file contents into an array of URLs
  const urls = data.split('\n').filter(line => line.trim() !== '');

  // Process each URL
  urls.forEach(url => {
    fetchAndSaveURL(url);
  });
});

// Function to fetch the URL and save the HTML content
async function fetchAndSaveURL(url) {
  try {
    const response = await axios.get(url);
    const hostname = new URL(url).hostname;
    const outputFilename = path.join(__dirname, hostname);

    // Write the HTML content to a file
    fs.writeFile(outputFilename, response.data, 'utf8', err => {
      if (err) {
        console.error(`Error writing file for ${url}: ${err}`);
      } else {
        console.log(`Saved ${url} to ${outputFilename}`);
      }
    });
  } catch (err) {
    console.error(`Error fetching ${url}: ${err.message}`);
  }
}
