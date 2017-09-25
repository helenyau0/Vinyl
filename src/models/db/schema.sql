DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  image BYTEA,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  body TEXT,
  created_at TIMESTAMP DEFAULT current_timestamp,
  users_id INT REFERENCES users(id),
  albums_id INT REFERENCES albums(id)
);
