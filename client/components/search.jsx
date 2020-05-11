import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.input`
  border: solid 1px grey;
  height: 20px;
`;

const SearchIcon = styled.input`
  border: solid 1px grey;
  height: 24px;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <SearchStyle type='text' value={this.props.term} onChange={this.props.handleChange} />
        <SearchIcon type='submit' value='&#128269;' />
      </form>
    );
  }
}

export default Search;