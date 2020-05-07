import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.review.name}</div>
        <div>{this.props.review.date}</div>
        <div>{this.props.review.body}</div>
      </div>
    );
  };
}

export default Review;