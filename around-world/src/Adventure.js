import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Image } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css';
import _ from 'lodash';
//import Controller from './Controller';

// This is Page is made by me :) - Sarah

class Adventure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizStarted: false,
      cool: [],
      test: '1'
    } 
    this.quizStart = this.quizStart.bind(this);
    //this.fetchResult = this.fetchResult.bind(this);
  }
  //will change the status of the quizStarted when the start button is clicked
  quizStart() {
    this.setState({quizStarted: true}); 
  }
// Show start button for quiz. Once clicked, quiz starts and start button is hidden
/*
  fetchResult(searchTerm){
    var thisComponent = this;
    //var longString = ""
    var ArrayofTags = "bellevue";
    //console.log(ArrayofTags);
    //console.log(searchTerm);
    //ArrayofTags.forEach(function(element) {
      //longString = " "+element;
    //}, this);
    Controller.searchMap(ArrayofTags)
      .then(function(data){
        //return data.results;
        thisComponent.setState({cool:data.results});
        thisComponent.setState({test:data.results[0].geometry.location.lat});
        console.log(this.state.result);
      
    }).catch( (err) => this.setState({result:[]}));

  }*/
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
      <h2> Adventure </h2>
      <div id="contentContainer">
      <Quiz /*resultFunction={this.fetchResult}*/ />
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
      //result: []
    };
    this.handleClick = this.handleClick.bind(this);
    //this.fetchData = this.fetchData.bind(this);
    //this.handleResult = this.handleResult.bind(this);
  }
  handleClick(answer) {
    var i = this.state.answerNum;
    i++;
    this.setState({answerNum: i});
    var j = this.state.answerArray;
    j.push(answer);
    console.log(this.state);
  }

  handleResult(event) {
    this.props.resultFunction(this.state.answerArray);
    console.log(this.state.answerArray);
  }
  /*fetchData(){
    var thisComponent = this;
    //var longString = ""
    var ArrayofTags = "seattle";
    console.log(ArrayofTags);
    //ArrayofTags.forEach(function(element) {
      //longString = " "+element;
    //}, this);
    Controller.searchMap(ArrayofTags)
    .then(function(data){
        //return data.results;
        thisComponent.setState({result: data.results[0]});
        console.log(this.state.result);
      
    }).catch( (err) => this.setState({results:[]}));

  }*/
  render() {
    var page = this.state.answerNum;
    switch(page){
      case 0: return (
      <div id="quizContainer">
        <Image className = "image"src = "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/166142726.jpg" rounded></Image>
        <p className="questionText">What is your budget?</p>
        <div className="answers">
          <Button className="answerButton" onClick={(e) => { this.handleClick('most affordable') }}>$ Almost Free</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('cheap')}}>$$ Little Money</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('expensive')}}>$$$ Some Money</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('') }}>$$$$ No Budget</Button>
          </div>
      </div>
    );
    case 1:  return (
      <div id="quizContainer">
        <Image className = "image"src = "http://www.worldatlas.com/aatlas/newart/continentslg.gif" rounded></Image>
        <p className="questionText">Where would you prefer to explore?</p>
        <div className="answers">
          <Button className="answerButton" onClick={(e) => { this.handleClick('America') }}>North or South America</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Africa') }}>Africa</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Europe') }}>Europe</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Asia') }}>Asia</Button>
          </div>
      </div>
    );
    case 2:   return (
      <div id="quizContainer">
        <Image className = "image"src = "http://www.familysmart.net/images/posts/family-travel-tips.jpg" rounded></Image>
        <p className="questionText">Who are you traveling with?</p>
        <div className="answers">
          <Button className="answerButton" onClick={(e) => { this.handleClick('Singles') }}>Me, Myself, and I</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Romantic ') }}>My Lover</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Family') }}>My Family</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Group') }}>My Friends</Button>
          </div>
      </div>
    );
    case 3:   return (
      <div id="quizContainer">
        <Image className = "image"src = "http://wdy.h-cdn.co/assets/cm/15/09/54f0fbd48fba0_-_1-couple-vacation-tropical-lgn.jpg" rounded></Image>
        <p className="questionText">Why are you traveling?</p>
        <div className="answers">
          <Button className="answerButton" onClick={(e) => { this.handleClick('Bar Club') }}>I Want to Celebrate</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Spa Beach') }}>I Want to Escape and Relax</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Ziplining Rock-Climbing') }}>I Want to Adventure and Explore</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Museum') }}>I want to Learn Something New</Button>
          </div>
      </div>
    );
    case 4:   return (
      <div id="quizContainer">
        <Image className = "image"src = "https://www.visitnc.com/resimg.php/imgcrop/2/38377/preview/800/480/HikeWaterfall.jpg" rounded></Image>
        <p className="questionText">How Close Would You Like to be to Nature?</p>
        <div className="answers">
          <Button className="answerButton" onClick={(e) => { this.handleClick('National Park') }}>Super Close</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Waterfall') }}>Semi Close</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Lakes') }}>Not So Close</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('') }}>Nature? No thanks!</Button>
          </div>
      </div>
    );
    case 5:   return (
      <div id="quizContainer">
        <Image className = "image"src = "http://images.r.cruisecritic.com/features/2016/03/10-lux-cruise-main.jpg" rounded></Image>
        <p className="questionText">How would you like to travel?</p>
        <div className="answers" onClick={this.fetchData}>
          <Button className="answerButton" onClick={(e) => { this.handleClick('') }}>Car or Bus</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('Cruise') }}>Boat</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('') }}>Plane</Button>
          <Button className="answerButton" onClick={(e) => { this.handleClick('') }}>No Preference</Button>
          </div>
      </div>
    );
    case 6: 
    //this should be the results
      //this.fetchData("seattle");
      //console.log(this.state.answerArray);
      //console.log(this.state.result);
      return (
      <div id="quizContainer">
      {/*<Button onClick={this.handleResult}>Show Results</Button>*/}
        <Image className = "image" src = "https://cdn.gobankingrates.com/wp-content/uploads/2015/05/las_vegas_strip.jpg" rounded></Image>
        <h3> RESULTS: </h3>
        <p className = "resultsInfo"></p>
      </div>
    );
    }

}
}

export default Adventure;