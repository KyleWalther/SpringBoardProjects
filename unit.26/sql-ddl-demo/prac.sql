-- CREATE TABLE posts (
--     title TEXT,
--     username TEXT,
--     link TEXT
-- )

DROP DATABASE prac_db;
CREATE DATABASE prac_db;
\c prac_db;



CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULl);


CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE CASCADE, 
    comment_id TEXT NOT NULL
);


CREATE TABLE subreddits (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE SET NULL,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INTEGER CHECK (subscribers > 0 ) DEFAULT 1,
    is_private BOOLEAN DEFAULT TRUE
    );


INSERT INTO users (user_name, password) VALUES ('Shawn', 'abcdefg'),
('Gray', 'yummy');

INSERT INTO subreddits (name, user_id)
VALUES ('chickens', 2),
('waterlovers', 1);

INSERT INTO comments (user_id, comment_id) VALUES (2, 'hello');











