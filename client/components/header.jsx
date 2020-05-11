import React from 'react';
import styled from 'styled-components'

const Overview = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
  justify-content: space-between;
  align-content: center;
`;

const Star = styled.div`
  color: rgb(0, 132, 137);
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        <Overview>
          <Star><span role='img'>&#9733;</span></Star>
          <div><b>{this.props.overall !== undefined ? this.props.overall.toFixed(2) : ''}</b></div>
          <div>|</div>
          <div><b>{this.props.count}</b></div>
          <div>reviews</div>
        </Overview>
      </div>
    );
  };
}

export default Header;