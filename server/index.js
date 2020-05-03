var express = require('express');
var app = express();
var port = 3001;
var db = require('./helpers/dbQuery.js')
var parse = require('./helpers/parser.js');

app.get('/api/reviews/:id', function (req, res) {
  db.queryReviews(req.params.id)
    .then((data) => {
      res.send(parse.parseReviews(data))
    });
});

app.listen(port, () => console.log(`distance-bnb reviews server listening at http://localhost:${port}`));