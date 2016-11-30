import React from 'react';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css';

var qNa = [
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"},
  {q:"What is your budget", pic: "img/pic1.jpg", a1: "$ Almost Free", a2: "$$ Little Money", a3: "$$$ Some Money", a4: "$$$$ No Budget"}
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
       {this.state.startGame ? 
         <Question/> :
         null
        }
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