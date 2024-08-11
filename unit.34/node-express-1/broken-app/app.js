const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON bodies
// This middleware parses incoming JSON request bodies and makes them available in req.body
app.use(express.json());

// Optional GET route for initial testing or information
// This route handles GET requests to the root URL ("/") and provides a simple message about the API.
app.get('/', (req, res) => {
  res.send('Welcome to the Developer Info API. Please POST to this endpoint with developer names.');
});

// POST route to retrieve developer information
// This route handles POST requests to the root URL ("/") and processes the request to fetch GitHub user information.
app.post('/', async function(req, res, next) {
  try {
    // Log the received body for debugging purposes
    console.log('Received body:', req.body);

    // Check if the request body contains the "developers" field and if it's an array
    if (!req.body.developers || !Array.isArray(req.body.developers)) {
      // Respond with a 400 status code and an error message if the format is incorrect
      return res.status(400).json({ error: 'Invalid input format: expected { developers: [...] }' });
    }

    // Use Promise.all to handle multiple asynchronous requests concurrently
    // Map over the list of developers and fetch their GitHub user information
    let results = await Promise.all(req.body.developers.map(async d => {
      // Fetch the data from the GitHub API for each developer
      const response = await axios.get(`https://api.github.com/users/${d}`);
      // Return the user data
      return response.data;
    }));

    // Map over the fetched results and format them to include only the name and bio
    let out = results.map(r => ({ name: r.name, bio: r.bio }));

    // Send the formatted result back as JSON
    return res.json(out);
  } catch (err) {
    // Pass any errors to the Express error handler
    next(err);
  }
});

// Start the server and listen on port 5500
// Log a message to indicate the server is running and provide the URL to access it
app.listen(5500, () => {
  console.log('Server running on http://localhost:5500');
});

