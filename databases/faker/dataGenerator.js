const faker = require('faker');
const _ = require('underscore');
const mysql = require('mysql');
const Promise = require('bluebird');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'distance_bnb'
});

Promise.promisifyAll(connection);

var generateRating = () => {
  let seed = Math.ceil(Math.random() * 20);
  if (seed === 1 || seed === 2) {
    return seed;
  } else if (seed < 9) {
    return 3;
  } else if (seed < 16) {
    return 4;
  } else {
    return 5;
  }
};

var generateUsers = (num) => {
  var users = [];
  for (var i = 0; i < num; i++) {
    var user = {};
    user.name = faker.fake("{{name.firstName}} {{name.lastName}}")
    user.profile_pic = `https://hrsf127-distance-bnb-reviews.s3-us-west-1.amazonaws.com/${i}.jpg`;
    user.profile_url = '/profile/' + user.name.split(' ')[0] + i;
    users.push(user);
  }
  return users;
};

var generateReviews = (numListings) => {
  let data = [];
  let users = [...Array(150).keys()];
  // set up reviews for given number of listings
  for (let i = 0; i < numListings; i++) {
    // give a random number of reviews from 0 to 100
    let numReviews = Math.floor(Math.random() * 101);
    // shuffled users copy
    let shuffledusers = _.shuffle(users);
    for (let j = 0; j < numReviews; j++) {
      // set up a review object
      let review = {};
      review.listings_id = i;
      review.user = shuffledusers.pop(); // take the top most of the shuffled users to randomize
      review.date = (faker.date.between('2016-01-01T07:52:35.865Z', '2020-04-30T07:52:35.865Z')).toISOString().slice(0,10);
      review.body = faker.lorem.paragraph();
      // 10% chance of having a response
      if (Math.random() > 0.9) {
        review.response = faker.lorem.paragraph();
      } else {
        review.response = '';
      }
      // create sub ratings, 7 of them in order
      var ratingCategories = ['overall', 'communication', 'check_in', 'cleanliness', 'accuracy', 'location', 'value'];
      review.ratings = {};
      for (let k = 0; k < 7; k++) {
        review.ratings[ratingCategories[k]] = generateRating();
      }
      data.push(review);
    }
  }
  return data;
};

var queryData = (users, reviews) => {
  let queries = [];
  let userids =[...Array(150).keys()];
  let shuffledusers = _.shuffle(userids);

  // push user queries
  for (let i = 0; i < users.length; i++) {
    queries.push(connection.queryAsync(`INSERT INTO users (profilePic, profileUrl, name) \
    VALUES ("${users[i].profile_pic}", "${users[i].profile_url}", "${users[i].name}")`));
  }

  // push listing queries
  for (let i = 0; i < 100; i++) {
    let temp = shuffledusers.pop();
    queries.push(connection.queryAsync(`INSERT INTO listings (userId) \
    VALUES ((SELECT id FROM users WHERE id=${temp}))`));
  }

  // push review & rating queries
  for (let i = 0; i < reviews.length; i++) {
    queries.push(connection.queryAsync(`INSERT INTO reviews (listingsId, userId, date, body, response) \
    VALUES ((SELECT id FROM listings WHERE id=${reviews[i].listings_id}) \
      , (SELECT id FROM users WHERE id=${reviews[i].user}), "${reviews[i].date}", "${reviews[i].body}", "${reviews[i].response}")`));
    queries.push(connection.queryAsync(`INSERT INTO ratings (reviewId, overall, communication, checkIn, cleanliness, accuracy, location, value) \
    VALUES ((LAST_INSERT_ID()), "${reviews[i].ratings.overall}", "${reviews[i].ratings.communication}", "${reviews[i].ratings.check_in}", "${reviews[i].ratings.cleanliness}", "${reviews[i].ratings.accuracy}", "${reviews[i].ratings.location}", "${reviews[i].ratings.value}")`));
  }

  return Promise.all(queries);
};

var generateData = () => {
  let users = generateUsers(150);
  let reviews = generateReviews(100);
  queryData(users, reviews)
    .then(() => {
      console.log('done!');
      connection.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

generateData();