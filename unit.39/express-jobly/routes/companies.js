"use strict";

/** Routes for companies. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");
const Company = require("../models/company");

const companyNewSchema = require("../schemas/companyNew.json");
const companyUpdateSchema = require("../schemas/companyUpdate.json");

const router = new express.Router();


/** POST / { company } =>  { company }
 *
 * company should be { handle, name, description, numEmployees, logoUrl }
 *
 * Returns { handle, name, description, numEmployees, logoUrl }
 *
 * Authorization required: login
 */

router.post("/", ensureLoggedIn, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, companyNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const company = await Company.create(req.body);
    return res.status(201).json({ company });
  } catch (err) {
    return next(err);
  }
});

/** GET /companies
 *
 * Get a list of companies.
 *
 * Optional query string parameters for filtering:
 * - name: filter by company name (case-insensitive, partial match)
 * - minEmployees: minimum number of employees
 * - maxEmployees: maximum number of employees
 *
 * Example:
 *   /companies?name=net&minEmployees=50&maxEmployees=200
 *
 * Returns { companies: [ { handle, name, description, numEmployees, logoUrl }, ... ] }
 *
 * If minEmployees > maxEmployees, responds with 400 status and error message.
 */

  router.get("/", async function (req, res, next) {
    try {
      const { name, minEmployees, maxEmployees } = req.query;
  
      if (minEmployees !== undefined && maxEmployees !== undefined && parseInt(minEmployees) > parseInt(maxEmployees)) {
        throw new BadRequestError("minEmployees cannot be greater than maxEmployees");
      }
  
      const companies = await Company.findAll({ name, minEmployees, maxEmployees });
      return res.json({ companies });
    } catch (err) {
      return next(err);
    }
  });
  
  module.exports = router;


// A POST route
// only works passing auth for admin based on user data in database
// uses create method from model to make a new company
// reponds with create status when created
  router.post("/", ensureAdmin, async function (req, res, next) {
    try {
      const company = await Company.create(req.body);
      return res.status(201).json({ company });
    } catch (err) {
      return next(err);
    }
  });







/** GET /[handle]  =>  { company }
 *
 *  Company is { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 *
 * Authorization required: none
 */

router.get("/:handle", async function (req, res, next) {
  try {
    const company = await Company.get(req.params.handle);
    return res.json({ company });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[handle] { fld1, fld2, ... } => { company }
 *
 * Patches company data.
 *
 * fields can be: { name, description, numEmployees, logo_url }
 *
 * Returns { handle, name, description, numEmployees, logo_url }
 *
 * Authorization required: login
 */

router.patch("/:handle", ensureLoggedIn, ensureAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, companyUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const company = await Company.update(req.params.handle, req.body);
    return res.json({ company });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[handle]  =>  { deleted: handle }
 *
 * Authorization: login
 */

router.delete("/:handle", ensureLoggedIn, ensureAdmin, async function (req, res, next) {
  try {
    await Company.remove(req.params.handle);
    return res.json({ deleted: req.params.handle });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
