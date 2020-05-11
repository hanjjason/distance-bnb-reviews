import React from 'react';
import styled from 'styled-components';

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Back = styled.div`
  color: rgb(0, 132, 137);
`;

const Footer = styled.div`
  border-top: solid grey 1px;
  margin-bottom: 8px;
`;

class SearchSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Summary>
          <div>{this.props.count} guests have mentioned "{this.props.term}"</div>
          <Back onClick={this.props.toggleSearch} >Back to all reviews</Back>
        </Summary>
        {this.props.count > 0 && (<Footer></Footer>)}
      </div>
      )
  }
}

export default SearchSummary;