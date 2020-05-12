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

    this.state = {term: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.term !== '') {
      this.props.setSearch(this.state.term);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SearchStyle type='text' value={this.state.term} onChange={this.handleChange} />
        <SearchIcon type='submit' value='&#128269;' />
      </form>
    );
  }
}

export default Search;