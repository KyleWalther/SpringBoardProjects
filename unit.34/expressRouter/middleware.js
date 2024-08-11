const ExpressError = require('./expressError');

function logger(req, res, next) {
    console.log(`Sending ${req.method} request to ${req.path}.`);
    return next();
  }

  function checkForPassword(req, res, next) {
    try {
        if (req.query.password !== 'cool') {
            throw new ExpressError('Bad password', 402);
        } else {
            return next(); // Continue to the next middleware or route handler if the password is correct
        }
    } catch (e) {
        return next(e); // Pass the error to the error handler
    }
}


module.exports = {logger, checkForPassword}


