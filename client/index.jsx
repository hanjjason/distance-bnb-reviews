import React from 'react';
import ReactDOM from 'react-dom';
import ReviewComponent from './components/review-component';

const Reviews = () => {
  return (
    <ReviewComponent />
  );
};

ReactDOM.render(<Reviews />, document.getElementById('reviews'));
// 275 char limit, finish word