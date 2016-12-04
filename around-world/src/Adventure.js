import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css';
import _ from 'lodash';

// This is Page is made by me :) - Sarah

class Adventure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizStarted: false
    } 
    this.quizStart = this.quizStart.bind(this);
  }
  //will change the status of the quizStarted when the start button is clicked
   quizStart() {
      this.setState({quizStarted: true}); 
      
    }
// Show start button for quiz. Once clicked, quiz starts and start button is hidden
  render() {
    console.log(this.state);
    return (
      <div >
        <h2>This is the Adventure page</h2>
        <div id="contentContainer">
          <Button className="startButton" bsStyle="primary" bsSize="large" block onClick={this.quizStart}>Start the Quiz</Button>
          <Quiz />
        </div>
      </div>
    );
  }
}

// Basic Template for the quiz pages - Sarah
class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="quizContainer">
        <p className="questionText"> This is a question</p>
        <div className="answers">
          <Button className="answerButton">Answer 1</Button>
          <Button className="answerButton">Answer 2</Button>
          <Button className="answerButton">Answer 3</Button>
          <Button className="answerButton">Answer 4</Button>
          </div>
      </div>
    );
  }

}

//an array of questions and answers - Sarah
var qNa = [
  { qID: 1, q: "Who are you traveling with?", a1: "Me, Myself, and I", a2: "My Significant Other", a3: "My Friends", a4: "My family" },
  { qID: 2, q: "What is your budget", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget" },
  { qID: 3, q: "When are you planning on traveling?", a1: "Winter", a2: "Spring", a3: "Summer", a4: "Fall" },
  { qID: 4, q: "Where would you like to explore?", a1: "North or South America", a2: "Europe", a3: "Asia", a4: "Africa" },
  { qID: 5, q: "Why are you traveling?", a1: "I Need to Celebrate", a2: "I Need to Escape", a3: "I Need to Adventure", a4: "I Need to Learn" },
  {
    qID: 6, q: "Who are you?", a1: "I'm a Thinker: Desides with Head, Critical and Driven by Thought", a2: "I'm a Feeler: Desides with Heart, Empathetic, and Driven by Emotion",
    a3: "I'm an Authority: Structured, Controlled, and Organized", a4: "I'm an Observer: Flexible, Relaxed and Spontanious"
  },
  { qID: 7, q: "What is your idea of a good time?", a1: "Going on a Hike", a2: "Having a Spa Day", a3: "Going to a Sporting Event", a4: "Dining Somewhere New" },
  { qID: 8, q: "When are you most active?", a1: "Early Morning", a2: "Mid Day", a3: "Afternoon", a4: "Night" },
  { qID: 9, q: "Where would you prefer to be?", a1: "At an Amuesment Attraction", a2: "Exposed to Nature", a3: "At a Fancy Restaurant", a4: "On a Beach" },
  { qID: 10, q: "What setting do you see yourself in?", a1: "Rural", a2: "Tropical", a3: "Urban", a4: "Polar" }
]
export default Adventure;