const mysql = require('mysql');
const Promise = require('bluebird');

var connection = mysql.createConnection({
  host     : '127.0.01',
  user     : 'root',
  password : 'hrsf127',
  database : 'distance_bnb'
});

Promise.promisifyAll(connection);

var queryOwner = (id) => {
  return connection.queryAsync(`SELECT users.name, users.profilePic, users.profileUrl
  FROM users
  INNER JOIN listings ON listings.userId=users.id
  WHERE listings.id=${id};`)
}

var queryReviews = (id) => {
  return connection.queryAsync(`SELECT users.profilePic, users.profileUrl, users.name, reviews.date, reviews.body, reviews.response, ratings.overall, ratings.communication, ratings.checkIn, ratings.cleanliness, ratings.accuracy, ratings.location, ratings.value \
  FROM reviews \
  INNER JOIN users ON users.id=reviews.userId \
  INNER JOIN ratings on reviews.id=ratings.reviewId \
  WHERE reviews.listingsId=${id}
  ORDER BY reviews.date DESC`);
};

var querySearch = (id, term) => {
  return connection.queryAsync(`SELECT users.profilePic, users.profileUrl, users.name, reviews.date, reviews.body, reviews.response, ratings.overall, ratings.communication, ratings.checkIn, ratings.cleanliness, ratings.accuracy, ratings.location, ratings.value \
  FROM reviews \
  INNER JOIN users ON users.id=reviews.userId \
  INNER JOIN ratings on reviews.id=ratings.reviewId \
  WHERE reviews.listingsId=${id}
    AND reviews.body LIKE '%${term}%'
  ORDER BY reviews.date DESC`);
}

module.exports.queryOwner = queryOwner;
module.exports.queryReviews = queryReviews;
module.exports.querySearch = querySearch;