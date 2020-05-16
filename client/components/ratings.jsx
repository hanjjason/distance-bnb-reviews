import React from 'react';
import styled from 'styled-components';

import Rating from './rating';

const RatingsStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 8px;
  justify-content: space-between;
`;

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RatingsStyle>
        {this.props.ratings !== undefined ? (Object.keys(this.props.ratings)).map((category) => {
          if (category !== 'Overall') {
            return (<Rating key={category} category={category} rating={this.props.ratings[category]} />)
          }
        }) : ''}
      </RatingsStyle>
    );
  };
}

export default Ratings;