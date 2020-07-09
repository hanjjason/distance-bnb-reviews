const fs = require('fs');
const request = require('request');
const path = require('path');

var downloadImage = (url, filename) => {
  request(url, {encoding: 'binary'}, function(error, response, body) {
    fs.writeFile('.databases/faker/images/' + filename, body, 'binary', function (err) {});
  });
}

var dlimages = (num) => {
  for (var i = 0; i < num; i++) {
    downloadImage('https://loremflickr.com/225/225/person', String(i) + '.jpg');
  }
}

dlimages(150);