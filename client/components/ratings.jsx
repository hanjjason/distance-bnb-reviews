import React from 'react';
import Rating from './rating';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.ratings !== undefined ? (Object.keys(this.props.ratings)).map((category) => (
          <Rating category={category} rating={this.props.ratings[category]} />
        )) : ''}
      </div>
    );
  };
}

export default Ratings;