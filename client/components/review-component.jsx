import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from './header';
import Ratings from './ratings';
import Reviews from './reviews';
import Pagination from './pagination';
import SearchSummary from './searchSummary';
import Search from './search';

const StyleOverview = styled.section`
  display: flex;
  width: 648px;
  flex-direction: column;
  font-family: 'Montserrat';
`;

const CombinedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`;

const Footer = styled.div`
  border-top: solid grey 1px;
  margin-bottom: 8px;
`;

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      reviews: [],
      count: 0,
      ratings: {},
      searchActive: false,
      searchReviews: [],
      searchPage: 1,
      searchCount: 0,
      term: '',
      owner: {}
    };

    this.pageChange = this.pageChange.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData()
      .then((res) => {
        let ratings = {};
        ratings['Overall'] = res.data.overall;
        ratings['Communication'] = res.data.communication;
        ratings['Check-in'] = res.data.check_in;
        ratings['Cleanliness'] = res.data.cleanliness;
        ratings['Accuracy'] = res.data.accuracy;
        ratings['Location'] = res.data.location;
        ratings['Value'] = res.data.value;
        return this.setState({
          reviews: res.data.reviews || [],
          count: res.data.total_reviews || 0,
          ratings: ratings
        });
      })
      .then(() => {
        return this.fetchOwner();
      })
      .then((res) => {
        return this.setState({
          owner: res.data[0]
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  pageChange(page) {
    this.setState({page: page});
  }

  setSearch(term) {
    axios.get('/api/reviews' + window.location.pathname + 'search/?term=' + term)
      .then((res) => {
        this.setState({
          searchActive: true,
          term: term,
          searchReviews: res.data.reviews || [],
          searchCount: res.data.total_reviews || 0
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleSearch() {
    this.setState({searchActive: false, term: ''});
  }

  fetchData() {
    return axios.get('/api/reviews' + window.location.pathname);
  }

  fetchOwner() {
    return axios.get('/api/owner' + window.location.pathname);
  }

  handleChange(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.term !== '') {
      this.setSearch(this.state.term);
    }
  }

  render() {
    let reviewProp = this.state.reviews;
    let pageProp = this.state.page;
    if (this.state.searchActive) {
      reviewProp = this.state.searchReviews;
      pageProp = this.state.searchPage;
    }


    return (
      <StyleOverview>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
        <CombinedHeader>
          <Header overall={this.state.ratings['Overall']} count={this.state.count} />
          <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </CombinedHeader>
        <Footer></Footer>
        {!this.state.searchActive && <Ratings ratings={this.state.ratings} />}
        {this.state.searchActive && <SearchSummary count={this.state.searchCount} term={this.state.term} toggleSearch={this.toggleSearch} />}
        <Reviews reviews={reviewProp} page={pageProp} owner={this.state.owner} term={this.state.term} />
        {reviewProp.length > 1 && (<Pagination numPages={reviewProp.length} currPage={pageProp} pageChange={this.pageChange} />)}
      </StyleOverview>
    );
  }
}

export default ReviewComponent;