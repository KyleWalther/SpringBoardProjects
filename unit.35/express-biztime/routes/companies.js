const express = require('express');
const router = express.Router();
const db = require('../db');
const ExpressError = require('../expressError'); // Add this line

// Route to get all companies
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM companies;');
        return res.json({ companies: result.rows });
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get a single company by id
router.get('/:code', async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM companies WHERE code = $1;', [req.params.code]);
        if (result.rows.length === 0) {
            return next(new ExpressError("Company Not Found", 404));
        }
        return res.json({ company: result.rows[0] });
    } catch (err) {
        return next(err);
    }
});


// Route to add a new company
router.post('/', async (req, res, next) => {
    try {
        const { code, name, description } = req.body;

        if (!code || !name || !description) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const result = await db.query(
            'INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description',
            [code, name, description]
        );

        return res.status(201).json({ company: result.rows[0] });
    } catch (err) {
        return next(err);
    }
});

// Route to update an existing company
router.put('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const { name, description } = req.body;

        const result = await db.query(
            'UPDATE companies SET name = $1, description = $2 WHERE code = $3 RETURNING code, name, description',
            [name, description, code]
        );

        if (result.rows.length === 0) {
            return next(new ExpressError("Company Not Found", 404));
        }

        return res.json({ company: result.rows[0] });
    } catch (err) {
        return next(err);
    }
});

// Route to delete a company
router.delete('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;

        const result = await db.query(
            'DELETE FROM companies WHERE code = $1 RETURNING code',
            [code]
        );

        if (result.rows.length === 0) {
            return next(new ExpressError("Company Not Found", 404));
        }

        return res.json({ status: "deleted" });
    } catch (err) {
        return next(err);
    }
});


module.exports = router;




