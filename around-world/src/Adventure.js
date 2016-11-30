import React from 'react';
import { Link, hashHistory } from 'react-router';

class Adventure extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
      <h2>This is the Adventure page</h2>
        <button className="quizButton">Take the Quiz </button>
      <h1>This is the Adventure page</h1>
      </div>
    );
  }
}

export default Adventure;