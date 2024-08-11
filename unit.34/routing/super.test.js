process.env.NODE_ENV = "test";
const request = require('supertest');
const app = require('./app');
const items = require('./fakeDb');

describe("Items API", function() {
    
    // Runs before each test to set up the test environment
    beforeEach(function() {
        items.push({ name: "yoyo", price: 1.40 });
    });

    // Runs after each test to clean up the test environment
    afterEach(function() {
        items.length = 0; // Clears all items from the array
    });

    describe("GET /items", function() {
        test("Gets a list of items", async function() {
            const resp = await request(app).get(`/items`);
            expect(resp.statusCode).toBe(200);
            expect(resp.body).toEqual({ items: [{ name: "yoyo", price: 1.40 }] });
        });
    });

    describe("POST /items", function() {
        test("Adds a new item to the list", async function() {
            const newItem = { name: "popsicle", price: 1.45 };
            const resp = await request(app).post('/items').send(newItem);
            expect(resp.statusCode).toBe(201);
            expect(resp.body).toEqual({ added: newItem });
            expect(items).toContainEqual(newItem);
        });

        test("Returns 400 for invalid data", async function() {
            const invalidItem = { name: "popsicle", price: "not_a_number" };
            const resp = await request(app).post('/items').send(invalidItem);
            expect(resp.statusCode).toBe(400);
            expect(resp.body).toEqual({ error: 'Invalid data' });
        });
    });

    describe("GET /items/:name", function() {
        test("Gets a single item by name", async function() {
            const resp = await request(app).get(`/items/yoyo`);
            expect(resp.statusCode).toBe(200);
            expect(resp.body).toEqual({ name: "yoyo", price: 1.40 });
        });

        test("Returns 404 for item not found", async function() {
            const resp = await request(app).get(`/items/nonexistent`);
            expect(resp.statusCode).toBe(404);
            expect(resp.body).toEqual({ error: 'Item not found' });
        });
    });

    describe("PATCH /items/:name", function() {
        test("Updates an item", async function() {
            const resp = await request(app)
              .patch(`/items/yoyo`)
              .send({ name: "new yoyo", price: 2.00 });

            expect(resp.statusCode).toBe(200);
            expect(resp.body).toEqual({ updated: { name: "new yoyo", price: 2.00 } });
        });

        test("Returns 404 for item not found", async function() {
            const resp = await request(app)
              .patch(`/items/nonexistent`)
              .send({ name: "new name" });

            expect(resp.statusCode).toBe(404);
            expect(resp.body).toEqual({ error: 'Item not found' });
        });
    });

    describe("DELETE /items/:name", function() {
        test("Deletes an item", async function() {
            const resp = await request(app).delete(`/items/yoyo`);
            expect(resp.statusCode).toBe(200);
            expect(resp.body).toEqual({ message: 'Deleted' });

            const getResp = await request(app).get(`/items`);
            expect(getResp.body.items).toEqual([]);
        });

        test("Returns 404 for item not found", async function() {
            const resp = await request(app).delete(`/items/nonexistent`);
            expect(resp.statusCode).toBe(404);
            expect(resp.body).toEqual({ error: 'Item not found' });
        });
    });
});
