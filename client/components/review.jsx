import React from 'react';
import styled from 'styled-components';

const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Footer = styled.div`
  border-top: solid grey 1px;
  margin-bottom: 20px;
`;

const Body = styled.div`
  margin-bottom: 50px;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // parse date
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let parsedYear = this.props.review.date.slice(0,4);
    let parsedMonth = months[Number(this.props.review.date.slice(5,7)) - 1];

/*
    let res = (<div></div>);
    if (this.props.review.response !== '') {
      res = (
        <Response>
          <Header>
            <ProfilePic src={this.props.owner.profilePic}></ProfilePic>
            <NameDate>
              <div><b>{this.props.owner.name}</b></div>
              <div>{parsedMonth + ' ' + parsedYear}</div>
            </NameDate>
          </Header>
          <Body>{this.props.review.response}</Body>
          <Footer></Footer>
        </Response>
      )
    }
    */

    return (
      <div>
        <Header>
          <ProfilePic src={this.props.review.profilePic}></ProfilePic>
          <NameDate>
            <div><b>{this.props.review.name}</b></div>
            <div>{parsedMonth + ' ' + parsedYear}</div>
          </NameDate>
        </Header>
        <Body>{this.props.review.body}</Body>
        <Footer></Footer>
      </div>
    );
  };
}

export default Review;