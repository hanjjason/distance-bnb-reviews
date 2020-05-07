import React from 'react';
import styled from 'styled-components'

const InLine = styled.div`
  display: inline;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        <div>
          <InLine><span role='img'>&#9733;</span></InLine>
          <InLine>{this.props.overall !== undefined ? this.props.overall.toFixed(2) : ''}</InLine>
          <InLine>|</InLine>
          <InLine>{this.props.count}</InLine>
          <InLine>reviews</InLine>
        </div>
      </div>
    );
  };
}

export default Header;