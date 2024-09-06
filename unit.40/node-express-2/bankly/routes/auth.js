const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const ExpressError = require('../helpers/expressError'); // Add ExpressError for error handling

/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *  Returns {token: jwt-token-string}.
 */
router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;
    if (!username || !password || !first_name || !last_name || !email || !phone) {
      throw new ExpressError('Missing required fields', 400);
    }

    let user = await User.register({ username, password, first_name, last_name, email, phone });
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *  Returns {token: jwt-token-string}.
 *  If incorrect username/password given, raises 401.
 */
router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ExpressError('Missing required fields', 400);
    }

    let user = await User.authenticate(username, password); // Ensure await is used
    if (!user) {
      throw new ExpressError('Invalid username/password', 401); // Handle invalid login
    }

    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
