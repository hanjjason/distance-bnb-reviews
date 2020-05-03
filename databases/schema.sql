DROP DATABASE IF EXISTS distance_bnb;

CREATE DATABASE distance_bnb;

USE distance_bnb;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  profilePic VARCHAR(250),
  profileUrl VARCHAR(250),
  name VARCHAR(250),
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id INTEGER AUTO_INCREMENT,
  userId INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users (id)
);

CREATE TABLE reviews (
  id INTEGER AUTO_INCREMENT,
  listingsId INTEGER,
  userId INTEGER,
  date DATE,
  body TEXT,
  response TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (listingsId) REFERENCES listings (id),
  FOREIGN KEY (userId) REFERENCES users (id)
);

CREATE TABLE ratings (
  id INTEGER AUTO_INCREMENT,
  reviewId INTEGER,
  overall INTEGER,
  communication INTEGER,
  checkIn INTEGER,
  cleanliness INTEGER,
  accuracy INTEGER,
  location INTEGER,
  value INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (reviewId) REFERENCES reviews (id)
);