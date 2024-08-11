/** Command-line tool to generate Markov text. */
const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

/** Create a Markov machine from the input text and generate output text. */
function createMarkovText(inputText) {
  const markovMachine = new markov.MarkovMachine(inputText);
  const generatedText = markovMachine.makeText();
  console.log(generatedText);
}

/** Read a file and produce text using the Markov machine. */
function processFile(filePath) {
  fs.readFile(filePath, "utf8", (error, fileContent) => {
    if (error) {
      console.error(`Error reading file at ${filePath}: ${error.message}`);
      process.exit(1);
    } else {
      createMarkovText(fileContent);
    }
  });
}

/** Fetch content from a URL and generate text using the Markov machine. */
async function processURL(webUrl) {
  try {
    const response = await axios.get(webUrl);
    createMarkovText(response.data);
  } catch (error) {
    console.error(`Error fetching URL at ${webUrl}: ${error.message}`);
    process.exit(1);
  }
}

/** Parse command line arguments to determine action. */
const [sourceType, sourcePath] = process.argv.slice(2);

if (sourceType === "file") {
  processFile(sourcePath);
} else if (sourceType === "url") {
  processURL(sourcePath);
} else {
  console.error(`Invalid source type: ${sourceType}. Use "file" or "url".`);
  process.exit(1);
}

