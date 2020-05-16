const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressStaticGzip = require("express-static-gzip");
//const redis = require('redis');

const db = require('./helpers/dbQuery.js')
const parse = require('./helpers/parser.js');

var port = 3001;
var app = express();

//const client = redis.createClient();

app.use(bodyParser.json());
app.use(cors());
//app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/reviews/:id', (req, res) => {
  db.queryReviews(req.params.id)
    .then((data) => {
      res.send(parse.parseReviews(data));
    });
});

app.get('/api/owner/:id', (req, res) => {
  db.queryOwner(req.params.id)
    .then((data) => {
      res.send(data);
    });
});

app.get('/api/reviews/:id/search/', (req, res) => {
  db.querySearch(req.params.id, req.query.term)
    .then((data) => {
      res.send(parse.parseReviews(data));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use('/:id', expressStaticGzip(path.join(__dirname, '../public'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  serveStatic: {
    maxAge: 31536000
  },
}));

app.listen(port, () => console.log(`distance-bnb reviews server listening at http://localhost:${port}`));