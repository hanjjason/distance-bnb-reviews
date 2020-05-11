import React from 'react';
import styled from 'styled-components';

const RatingStyle = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
  width: 300px;
`;

const Meter = styled.progress`
  height: 4px;
  width: 100%;
  background: rgb(0, 132, 137);
  flex-grow: 1;
`;

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`;

class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RatingStyle>
        <InnerDiv>{this.props.category}</InnerDiv>
        <InnerDiv>
          <Meter role='progressbar' value={(this.props.rating/5)} min='0' max='1' />
          <div>{this.props.rating !== undefined ? this.props.rating.toFixed(2): ''}</div>
        </InnerDiv>
      </RatingStyle>
    );
  };
}

export default Rating;