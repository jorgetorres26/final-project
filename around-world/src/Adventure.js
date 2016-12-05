import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Image } from 'react-bootstrap';
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
    if(this.state.quizStarted == false){
    console.log(this.state);
    return (
      <div >
        <h2>This is the Adventure page</h2>
        <div id="contentContainer">
          <Button className="startButton" bsStyle="primary" bsSize="large" block onClick={this.quizStart}>Start the Quiz</Button>
        </div>
      </div>
    );
  }
  else{
    return(
      <div>
      <h2> This is the Adventure Quiz</h2>
      <div id="contentContainer">
      <Quiz/>
      </div>
      </div>
    );
  }
  }
  
}

// The quiz pages - Sarah
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      answerNum:0,
      answerArray: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var i = this.state.answerNum;
    i++;
    this.setState({answerNum: i});
    var j = this.state.answerArray;
    j.push(document.getElementsByClassName("answerButton"));
    console.log(this.state);

  }
  render() {
    var page = this.state.answerNum;
    switch(page){
      case 0: return (
      <div id="quizContainer">
        <Image className = "image"src = "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/166142726.jpg" rounded></Image>
        <p className="questionText">What is your budget?</p>
        <div className="answers">
          <Button className="answerButton" onClick={this.handleClick}>$ Almost Free</Button>
          <Button className="answerButton" onClick={this.handleClick}>$$ Little Money</Button>
          <Button className="answerButton" onClick={this.handleClick}>$$$ Some Money</Button>
          <Button className="answerButton" onClick={this.handleClick}>$$$$ No Budget</Button>
          </div>
      </div>
    );
    case 1:  return (
      <div id="quizContainer">
        <Image className = "image"src = "http://www.worldatlas.com/aatlas/newart/continentslg.gif" rounded></Image>
        <p className="questionText">Where would you prefer to explore?</p>
        <div className="answers">
          <Button className="answerButton" onClick={this.handleClick}>North or South America</Button>
          <Button className="answerButton" onClick={this.handleClick}>Africa</Button>
          <Button className="answerButton" onClick={this.handleClick}>Europe or Australia</Button>
          <Button className="answerButton" onClick={this.handleClick}>Asia</Button>
          </div>
      </div>
    );
    case 2:   return (
      <div id="quizContainer">
        <Image className = "image"src = "http://www.familysmart.net/images/posts/family-travel-tips.jpg" rounded></Image>
        <p className="questionText">Who are you traveling with?</p>
        <div className="answers">
          <Button className="answerButton" onClick={this.handleClick}>Me, Myself, and I</Button>
          <Button className="answerButton" onClick={this.handleClick}>My Lover</Button>
          <Button className="answerButton" onClick={this.handleClick}>My Family</Button>
          <Button className="answerButton" onClick={this.handleClick}>My Friends</Button>
          </div>
      </div>
    );
    case 3:   return (
      <div id="quizContainer">
        <Image className = "image"src = "http://wdy.h-cdn.co/assets/cm/15/09/54f0fbd48fba0_-_1-couple-vacation-tropical-lgn.jpg" rounded></Image>
        <p className="questionText">Why are you traveling?</p>
        <div className="answers">
          <Button className="answerButton" onClick={this.handleClick}>I Want to Celebrate</Button>
          <Button className="answerButton" onClick={this.handleClick}>I Want to Escape and Relax</Button>
          <Button className="answerButton" onClick={this.handleClick}>I Want to Adventure and Explore</Button>
          <Button className="answerButton" onClick={this.handleClick}>I want to Learn Something New</Button>
          </div>
      </div>
    );
    case 4:   return (
      <div id="quizContainer">
        <Image className = "image"src = "https://www.visitnc.com/resimg.php/imgcrop/2/38377/preview/800/480/HikeWaterfall.jpg" rounded></Image>
        <p className="questionText">How Close Would You Like to be to Nature?</p>
        <div className="answers">
          <Button className="answerButton" onClick={this.handleClick}>Super Close</Button>
          <Button className="answerButton" onClick={this.handleClick}>Semi Close</Button>
          <Button className="answerButton" onClick={this.handleClick}>Not So Close</Button>
          <Button className="answerButton" onClick={this.handleClick}>Nature? No thanks!</Button>
          </div>
      </div>
    );
    case 5:   return (
      <div id="quizContainer">
        <Image className = "image"src = "http://images.r.cruisecritic.com/features/2016/03/10-lux-cruise-main.jpg" rounded></Image>
        <p className="questionText">How would you like to travel?</p>
        <div className="answers">
          <Button className="answerButton" onClick={this.handleClick}>Car or Bus</Button>
          <Button className="answerButton" onClick={this.handleClick}>Boat</Button>
          <Button className="answerButton" onClick={this.handleClick}>Plane</Button>
          <Button className="answerButton" onClick={this.handleClick}>No Preference</Button>
          </div>
      </div>
    );
    case 6: 
    //this should be the results
      return (
      <div id="quizContainer">
        <p> THIS IS WHERE THE RESULTS GO</p>
      </div>
    );
    }

}
}

export default Adventure;