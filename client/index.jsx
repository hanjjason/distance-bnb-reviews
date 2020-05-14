import React from 'react';
import ReactDOM from 'react-dom';
import ReviewComponent from './components/review-component';

const App = () => {
  return (
    <ReviewComponent />
  );
};

ReactDOM.render(<App />, document.getElementById('reviews'));
// 275 char limit, finish word