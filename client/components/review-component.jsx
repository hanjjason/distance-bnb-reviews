import React from 'react';
import axios from 'axios';

import Header from './header';
import Ratings from './ratings';
import Reviews from './reviews';

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
        ratings['Overall'] = res.data.overall;
        ratings['Communication'] = res.data.communication;
        ratings['Check-in'] = res.data.check_in;
        ratings['Cleanliness'] = res.data.cleanliness;
        ratings['Accuracy'] = res.data.accuracy;
        ratings['Location'] = res.data.location;
        ratings['Value'] = res.data.value;
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
      <section>
        <Header overall={this.state.ratings['Overall']} count={this.state.count} />
        <Ratings ratings={this.state.ratings} />
        <Reviews reviews={this.state.reviews} page={this.state.page} />
      </section>
    );
  }
}

export default ReviewComponent;