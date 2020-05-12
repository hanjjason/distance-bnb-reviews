import React from 'react';
import styled from 'styled-components';

const RatingStyle = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
  width: 300px;
`;

const Meter = styled.div`
  height: 4px;
  width: 100%;
  background: rgb(192, 192, 192);
  border-radius: 100px;
`;

const FilledMeter = styled.div`
  height: 4px;
  width: ${props => props.rating || 0}%;
  background: rgb(0, 132, 137);
  border-radius: 100px
`;

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-basis: 50%;
  font-size: 14px;
`;

const RatingNum = styled.div`
  font-size: 12;
  width: 40px;
  margin-left: 8px;
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
          <Meter>
            <FilledMeter rating={Math.ceil((this.props.rating/5)*100)} />
          </Meter>
          <RatingNum>{this.props.rating !== undefined ? this.props.rating.toFixed(2): ''}</RatingNum>
        </InnerDiv>
      </RatingStyle>
    );
  };
}

export default Rating;