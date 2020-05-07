import React from 'react';
import styled from 'styled-components';

const InLine = styled.div`
  display: inline;
`;

const Meter = styled.progress`
  height: 4px;
  width: 219px;
  background: rgb(0, 132, 137);
  -webkit-border-radius: 100px;
  display: inline-block;
  vertical-align: middle;
`;

class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.category} <Meter role='progressbar' value={(this.props.rating/5)} min='0' max='1' />
        <InLine>{this.props.rating !== undefined ? this.props.rating.toFixed(2): ''}</InLine>
      </div>
    );
  };
}

export default Rating;