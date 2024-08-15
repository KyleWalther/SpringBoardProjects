/** Database setup for BizTime. */

const { Client } = require('pg');


// Database configuration from environment variables
const DB_USER = process.env.DB_USER || 'kylewalther';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;
const DB_NAME = process.env.DB_NAME || 'biztime';

const DB_URI = process.env.NODE_ENV === "test"
  ? `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}_test`
  : `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Create a new client instance
const db = new Client({
  connectionString: DB_URI,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
});

// Connect to the database
db.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => {
    console.error("Database connection error", err.stack);
    process.exit(1); // Consider using this only for critical failures
  });

module.exports = db;
