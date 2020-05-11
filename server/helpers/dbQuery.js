const mysql = require('mysql');
const Promise = require('bluebird');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'distance_bnb'
});

Promise.promisifyAll(connection);

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

module.exports.queryReviews = queryReviews;
module.exports.querySearch = querySearch;