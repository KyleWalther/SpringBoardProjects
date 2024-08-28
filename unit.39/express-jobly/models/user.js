"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const { sqlForPartialUpdate } = require("../helpers/sql");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

/** Related functions for users. */

class User {
  // ... (existing methods)

  /** Apply for a job: update db, returns undefined.
   *
   * - username: user applying
   * - jobId: job id
   **/
  static async applyToJob(username, jobId) {
    const userCheck = await db.query(
      `SELECT username
       FROM users
       WHERE username = $1`,
      [username]);
    if (userCheck.rows.length === 0) {
      throw new NotFoundError(`No user: ${username}`);
    }

    const jobCheck = await db.query(
      `SELECT id
       FROM jobs
       WHERE id = $1`,
      [jobId]);
    if (jobCheck.rows.length === 0) {
      throw new NotFoundError(`No job: ${jobId}`);
    }

    await db.query(
      `INSERT INTO applications (username, job_id)
       VALUES ($1, $2)`,
      [username, jobId]);
  }

  /** Given a username, return data about user.
   *
   * Returns { username, first_name, last_name, email, is_admin, jobs }
   *   where jobs is [ jobId, jobId, ... ]
   *
   * Throws NotFoundError if user not found.
   **/
  static async get(username) {
    const userRes = await db.query(
      `SELECT username,
              first_name AS "firstName",
              last_name AS "lastName",
              email,
              is_admin AS "isAdmin"
       FROM users
       WHERE username = $1`,
      [username],
    );

    const user = userRes.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);

    const userJobsRes = await db.query(
      `SELECT job_id
       FROM applications
       WHERE username = $1`,
      [username]);

    user.jobs = userJobsRes.rows.map(j => j.job_id);
    return user;
  }

  // ... (existing methods)
}

module.exports = User;
