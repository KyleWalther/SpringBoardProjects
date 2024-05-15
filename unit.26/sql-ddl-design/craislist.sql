


CREATE TABLE region(
    id SERIAL PRIMARY KEY,
    region_name TEXT NOT NULL
);

CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    region_id INTEGER REFERENCES region ON DELETE CASCADE
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    categorie_name TEXT NOT NULL,
    post_id INTEGER REFERENCES post ON DELETE CASCADE
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title TEXT,
    item_desc TEXT,
    user_id INTEGER REFERENCES user ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories ON DELETE CASCADE,
    region_id INTEGER REFERENCES region ON DELETE CASCADE,
    price FLOAT
);