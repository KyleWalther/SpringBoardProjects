const express = require('express');
const ExpressError = require('./expressError');
const items = require('./fakeDb');

const app = express();

app.use(express.json());

// GET /items - Get a list of items
app.get('/items', (req, res) => {
    res.json({ items });
});

// POST /items - Add a new item to the list
app.post('/items', (req, res) => {
    const { name, price } = req.body;

    // Basic validation
    if (!name || !Number.isFinite(price)) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    const newItem = { name, price };
    items.push(newItem);
    res.status(201).json({ added: newItem });
});

// GET /items/:name - Get a single item by name
app.get('/items/:name', (req, res) => {
    const { name } = req.params;
    const item = items.find(i => i.name === name);
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
});

// PATCH /items/:name - Modify an item's name and/or price
app.patch('/items/:name', (req, res) => {
    const itemName = req.params.name;
    const { name, price } = req.body;

    const item = items.find(item => item.name === itemName);

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    if (name !== undefined) item.name = name;
    if (price !== undefined) item.price = price;

    return res.json({ updated: item });
});


// DELETE /items/:name - Delete a specific item
app.delete('/items/:name', (req, res) => {
    const itemName = req.params.name;

    const index = items.findIndex(item => item.name === itemName);

    if (index === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }

    items.splice(index, 1);

    return res.json({ message: 'Deleted' });
});










// 404 handler
app.use((req, res, next) => {
    const err = new ExpressError('Not Found', 404);
    next(err);
});

// Generic error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
            status: err.status || 500,
        },
    });
});

module.exports = app;
