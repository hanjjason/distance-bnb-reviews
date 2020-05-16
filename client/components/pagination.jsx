import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: rgb(0, 132, 137);
`;

const ArrowButton = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 100%;
  border: 1px solid;
  line-height: 28px;
`;

const Page = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 28px;
`;

const CurrPage = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(255,255,255);
  border-radius: 100%;
  border: 1px solid;
  background-color: rgb(0, 132, 137);
  line-height: 28px;
`;


class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevButtonShown: true,
      nextButtonShown: true
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.setButtons();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currPage !== prevProps.currPage) {
      this.setButtons();
    }
  }

  clickHandler(page) {
    this.props.pageChange(page);
  }

  // set buttons active/inactive
  setButtons() {
    // check if buttons are active, if not se them to false
    let changePrev = true;
    let changeNext = true;
    if (this.props.currPage === 1) {
      changePrev = false;
    }
    if (this.props.currPage === this.props.numPages) {
      changeNext = false;
    }
    // set state of buttons
    this.setState({prevButtonShown: changePrev, nextButtonShown: changeNext});
  }

  render() {
    let pages = [];

    if (this.props.numPages > 1) {
      var curr = this.props.currPage;

      // add initial page
      pages.push(curr);

      // add previous pages
      for (let i = 0; i < 3; i++) {
        curr -= 1;
        if (curr < 1) {
          break;
        }
        pages.unshift(curr);
      }
      if (pages[0] !== 1) {
        pages[0] = 1;
      }
      if (pages[1] !== 2 && pages.length === 4) {
        pages[1] = '...';
      }

      // add next pages
      curr = this.props.currPage;
      for (let i = 0; i < 3; i++) {
        curr += 1;
        if (curr > this.props.numPages) {
          break;
        }
        pages.push(curr);
      }
      if (pages[pages.length - 1] !== this.props.numPages) {
        pages[pages.length - 1] = this.props.numPages;
      }
      if (pages[pages.length - 2] !== this.props.numPages - 1) {
        pages[pages.length - 2] = '...';
      }
    }

    return (
      <Flex>
        {this.state.prevButtonShown && (<ArrowButton onClick={this.clickHandler.bind(null, this.props.currPage - 1)}><div>&lt;</div></ArrowButton>)}
        {pages.map((number) => {
          if (number === '...') {
            return (<Page key={number} >{number}</Page>);
          } else if (number === this.props.currPage) {
            return (<CurrPage key={number} >{number}</CurrPage>);
          } else {
            return (<Page key={number} onClick={this.clickHandler.bind(null, number)}>{number}</Page>);
          }
        })}
        {this.state.nextButtonShown && (<ArrowButton onClick={this.clickHandler.bind(null, this.props.currPage + 1)}><div>&gt;</div></ArrowButton>)}
      </Flex>
    );
  }
}

export default Pagination;