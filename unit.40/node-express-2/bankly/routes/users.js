const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');
const { authUser, requireLogin, requireAdmin } = require('../middleware/auth');

/** GET / - Get list of users.
 * 
 * Only logged-in users should be able to use this.
 * Returns {users: [{username, first_name, last_name}, ...]}
 */
router.get('/', authUser, requireLogin, async function(req, res, next) {
  try {
    let users = await User.getAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
});

/** GET /:username - Get details on a user.
 * 
 * Only logged-in users should be able to use this.
 * Returns {user: {username, first_name, last_name, phone, email}}.
 * Raises 404 error if user cannot be found.
 */
router.get('/:username', authUser, requireLogin, async function(req, res, next) {
  try {
    let user = await User.get(req.params.username);
    if (!user) {
      throw new ExpressError("User not found", 404);
    }
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /:username - Update user.
 * 
 * Only the user themselves or an admin user can use this.
 * Accepts {first_name, last_name, phone, email}.
 * Returns {user: all-data-about-user}.
 * Raises 404 error if user cannot be found.
 */
router.patch('/:username', authUser, requireLogin, async function(req, res, next) {
  try {
    if (!req.curr_admin && req.curr_username !== req.params.username) {
      throw new ExpressError('Only that user or admin can edit a user.', 401);
    }

    // Get fields to change; remove token so we don't try to change it
    let fields = { ...req.body };
    delete fields._token;

    let user = await User.update(req.params.username, fields);
    if (!user) {
      throw new ExpressError('User not found', 404);
    }
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /:username - Delete a user.
 * 
 * Only an admin user should be able to use this.
 * Returns {message: "deleted"}.
 * Raises 404 error if user cannot be found.
 */
router.delete('/:username', authUser, requireAdmin, async function(req, res, next) {
  try {
    const user = await User.delete(req.params.username); // Add await
    if (!user) {
      throw new ExpressError('User not found', 404);
    }
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
