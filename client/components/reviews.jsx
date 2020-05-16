import React from 'react';

import Review from './review';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.reviews.length > 0 ? (this.props.reviews[this.props.page - 1]).map((review, index) => (
          <Review key={index} review={review} owner={this.props.owner} />
        )) : ''}
      </div>
    );
  };
}

export default Reviews;