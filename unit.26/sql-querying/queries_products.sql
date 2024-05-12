-- Comments in SQL Start with dash-dash --

products_db=# INSERT INTO products (name, price, can_be_returned) VALUES ('chair', 44.00, false);
INSERT 0 1

products_db=# INSERT INTO products (name, price, can_be_returned) VALUES ('stool', 25.99, true);
INSERT 0 1

products_db=# INSERT INTO products (name, price, can_be_returned) VALUES ('table', 124.00, false);
INSERT 0 1

SELECT * FROM products;

SELECT name FROM products;

SELECT name, price FROM products;

 INSERT INTO products (name, price, can_be_returned) VALUES ('gum', 1.00, false);
INSERT 0 1

 SELECT * FROM products WHERE can_be_returned = true;

SELECT * FROM products WHERE price < 40;

SELECT * FROM products WHERE price > 22.50 AND price < 99.99;

UPDATE products SET price = price - 20;

 DELETE FROM products WHERE price < 25;

 UPDATE products SET price = price + 20;

UPDATE products SET can_be_returned = true;

------------------------------------------------------

































