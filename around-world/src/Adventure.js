import React from 'react';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css';
import _ from 'lodash';

var qNa = [
  {q:"Who are you traveling with?", pic: "img/pic0.jpg", a1: "Me, Myself, and I", a2: "My Significant Other", a3: "My Friends", a4: "My family"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"When are you planning on traveling?", pic: "img/pic2.jpg", a1: "Winter", a2: "Spring", a3: "Summer", a4: "Fall"},
  {q:"Where would you like to explore?", pic: "img/pic3.jpg", a1: "North or South America", a2: "Europe", a3: "Asia", a4: "Africa"},
  {q:"Why are you traveling?", pic: "img/pic4.jpg", a1: "I Need to Celebrate", a2: "I Need to Escape", a3: "I Need to Adventure", a4: "I Need to Learn"},
  {q:"Who are you?", pic: "img/pic5.jpg", a1: "I'm a Thinker: Desides with Head, Critical and Driven by Thought", a2: "I'm a Feeler: Desides with Heart, Empathetic, and Driven by Emotion", 
  a3: "I'm an Authority: Structured, Controlled, and Organized", a4: "I'm an Observer: Flexible, Relaxed and Spontanious"},
  {q:"What is your idea of a good time?", pic: "img/pic6.jpg", a1: "Going on a Hike", a2: "Having a Spa Day", a3: "Going to a Sporting Event", a4: "Dining Somewhere New"},
  {q:"When are you most active?", pic: "img/pic7.jpg", a1: "Early Morning", a2: "Mid Day", a3: "Afternoon", a4: "Night"},
  {q:"Where would you prefer to be?", pic: "img/pic8.jpg", a1: "At an Amuesment Attraction", a2: "Exposed to Nature", a3: "At a Fancy Restaurant", a4: "On a Beach"},
  {q:"What setting do you see yourself in?", pic: "img/pic9", a1: "Rural", a2: "Tropical", a3: "Urban", a4: "Polar"}
]

class Adventure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div >
      <h2>This is the Adventure page</h2>
        <div id="contentContainer">
          <StartQuiz/>
        </div>

      </div>
    );
  }
}

class StartQuiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startGame: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      startQuiz: true,
    })
  }

  render(){
    return (
      <div>
       <button type="button" className="btn btn-primary btn-block" onClick={this.handleClick}> Start Quiz </button>
       <div className="game">
       {this.state.startGame ? 
         <Question/> :
         null
        }
      </div>
      </div>
    )
  }
}


class Question extends React.Component {
  constructor(props){
    super(props);
    
  }


}
export default Adventure;