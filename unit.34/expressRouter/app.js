const express = require('express');
const ExpressError = require('./expressError'); 
const middelware = require('./middleware');
const morgan = require('morgan')

const userRoutes = require('./userRoutes');


const app = express();

app.use(express.json());
// app.use(middelware.logger)
app.use(morgan('dev'))


app.use('/users', userRoutes);

app.get('/secret',middelware.checkForPassword, (req, res, next) => {
    res.send('Good Password');
});

app.get('/private',middelware.checkForPassword,  (req, res, next) => {
    res.send('Good good good  Password');
});









// 404 handler
app.use((req, res, next) => {
  const e = new ExpressError('Page not found', 404);
  next(e);
});

// General error handler
app.use((err, req, res, next) => {
  // The default status is 500 Internal Server Error
  let status = err.status || 500;

  // Set the status and alert the user
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});


module.exports = app;



