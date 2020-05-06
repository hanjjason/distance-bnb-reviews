import React from 'react';
import ReactDOM from 'react-dom';
import ReviewComponent from './components/review-component';

const App = () => {
  return (
    <section>
      <h1>Reviews</h1>
      <ReviewComponent />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
// 275 char limit, finish word