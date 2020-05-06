var parseReviews = (data) => {
  if (data.length === 0) {
    return data;
  }
  let parsed = {};
  parsed.total_reviews = data.length;
  let overall = 0, communication = 0, check_in = 0, cleanliness = 0, accuracy = 0, location = 0, value = 0;
  for (let i = 0; i < data.length; i++) {
    overall += data[i].overall;
    communication += data[i].communication;
    check_in += data[i].checkIn;
    cleanliness += data[i].cleanliness;
    accuracy += data[i].accuracy;
    location += data[i].location;
    value += data[i].value;
  }

  parsed.overall = overall / data.length;
  parsed.communication = communication / data.length;
  parsed.check_in = check_in / data.length;
  parsed.cleanliness = cleanliness / data.length;
  parsed.accuracy = accuracy / data.length;
  parsed.location = location / data.length;
  parsed.value = value / data.length;

  parsed.reviews = data;

  return parsed;
}

module.exports.parseReviews = parseReviews;