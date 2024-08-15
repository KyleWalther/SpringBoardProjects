const express = require('express');
const router = express.Router();
const db = require('../db');
const ExpressError = require('../expressError'); // Add this line

// Route to get all invoices
router.get('/', async (req, res, next) => {
    try {
        const result = await db.query('SELECT id, comp_code FROM invoices;');
        return res.json({ invoices: result.rows });
    } catch (err) {
        return next(err);
    }
});


// Route to get a specific invoice by id
router.get('/:id', async (req, res, next) => {
    try {
        const invoiceResult = await db.query(
            'SELECT id, amt, paid, add_date, paid_date, comp_code FROM invoices WHERE id = $1',
            [req.params.id]
        );

        if (invoiceResult.rows.length === 0) {
            return next(new ExpressError("Invoice Not Found", 404));
        }

        const invoice = invoiceResult.rows[0];

        // Get company details
        const companyResult = await db.query(
            'SELECT code, name, description FROM companies WHERE code = $1',
            [invoice.comp_code]
        );

        if (companyResult.rows.length === 0) {
            return next(new ExpressError("Company Not Found", 404));
        }

        const company = companyResult.rows[0];

        return res.json({
            invoice: {
                id: invoice.id,
                amt: invoice.amt,
                paid: invoice.paid,
                add_date: invoice.add_date,
                paid_date: invoice.paid_date,
                company
            }
        });
    } catch (err) {
        return next(err);
    }
});


// Route to add a new invoice
router.post('/', async (req, res, next) => {
    try {
        const { comp_code, amt } = req.body;

        if (!comp_code || amt === undefined) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const result = await db.query(
            'INSERT INTO invoices (comp_code, amt, paid, add_date, paid_date) VALUES ($1, $2, false, CURRENT_DATE, NULL) RETURNING id, comp_code, amt, paid, add_date, paid_date',
            [comp_code, amt]
        );

        return res.status(201).json({ invoice: result.rows[0] });
    } catch (err) {
        return next(err);
    }
});

// Route to update an existing invoice
router.put('/:id', async (req, res, next) => {
    try {
        const { amt } = req.body;
        const { id } = req.params;

        const result = await db.query(
            'UPDATE invoices SET amt = $1 WHERE id = $2 RETURNING id, comp_code, amt, paid, add_date, paid_date',
            [amt, id]
        );

        if (result.rows.length === 0) {
            return next(new ExpressError("Invoice Not Found", 404));
        }

        return res.json({ invoice: result.rows[0] });
    } catch (err) {
        return next(err);
    }
});

// Route to delete an invoice
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            'DELETE FROM invoices WHERE id = $1 RETURNING id',
            [id]
        );

        if (result.rows.length === 0) {
            return next(new ExpressError("Invoice Not Found", 404));
        }
        return res.json({ status: "deleted" });
    } catch (err) {
        return next(err);
    }
});


// Route to get a specific company by code with associated invoices
router.get('/:code', async (req, res, next) => {
    try {
        const companyResult = await db.query(
            'SELECT code, name, description FROM companies WHERE code = $1',
            [req.params.code]
        );

        if (companyResult.rows.length === 0) {
            return next(new ExpressError("Company Not Found", 404));
        }

        const company = companyResult.rows[0];

        const invoicesResult = await db.query(
            'SELECT id FROM invoices WHERE comp_code = $1',
            [req.params.code]
        );

        const invoices = invoicesResult.rows.map(row => row.id);

        return res.json({
            company: {
                ...company,
                invoices
            }
        });
    } catch (err) {
        return next(err);
    }
});


module.exports = router;

