import React from 'react';
import Header from './header';
import axios from 'axios';

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      reviews: [],
      count: 0,
      ratings: {}
    };
  }

  componentDidMount() {
    this.fetchData()
      .then((res) => {
        let ratings = {};
        ratings.overall = res.data.overall;
        ratings.communication = res.data.communication;
        ratings.check_in = res.data.check_in;
        ratings.cleanliness = res.data.cleanliness;
        ratings.accuracy = res.data.accuracy;
        ratings.location = res.data.location;
        ratings.value = res.data.value;
        this.setState({
          reviews: res.data.reviews,
          count: res.data.total_reviews,
          ratings: ratings
        })
      })
  }

  fetchData() {
    return axios.get('/api/reviews' + window.location.pathname);
  }

  render() {
    return (
      <Header />
    );
  }
}

export default ReviewComponent;