/** BizTime express application. */


const express = require("express");
const app = express();
const ExpressError = require("./expressError")

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the BizTime API!');
});

const companiesRoutes = require('./routes/companies'); 
app.use('/companies', companiesRoutes);

const invoiceRoutes = require('./routes/invoices'); 
app.use('/invoices', invoiceRoutes);



/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});


module.exports = app;
