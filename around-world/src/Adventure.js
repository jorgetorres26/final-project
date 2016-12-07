import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Image } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css';
import _ from 'lodash';
import Controller from './Controller';

// This is Page is made by me :) - Sarah

class Adventure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizStarted: false,
      result: { photo: '', info: '' }
    }
    this.quizStart = this.quizStart.bind(this);
    this.fetchResult = this.fetchResult.bind(this);
  }
  //will change the status of the quizStarted when the start button is clicked
  quizStart() {
    this.setState({ quizStarted: true });
  }
  // Show start button for quiz. Once clicked, quiz starts and start button is hidden

  fetchResult(string) {
    var thisComponent = this;
    console.log(string);
    Controller.searchMap(string)
      .then(function (data) {

        var baseUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
        var key = "&key=AIzaSyAWOXIjZamr-SLhYSnzbMm4_VGbQ9EBmPI";
        var ref = data.results[0].photos[0].photo_reference;
        console.log(ref);
        thisComponent.setState({
          result: {
            photo: baseUrl + ref + key,
            info: data.results[0]
          }
        });
      }).catch((err) => this.setState({ result: [] }));

  }
  render() {
    console.log(this.state);

    if (this.state.quizStarted == false) {
      return (
        <div >
          <h2>Take the Adventure Quiz to find a perfect place for you to try! </h2>
          <div id="contentContainer">
            <Button aria-label="Start Quiz button" id = "start" className="startButton" bsStyle="primary" bsSize="large" block onClick={this.quizStart}>Start the Quiz</Button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2> Adventure Quiz </h2>
          <div id="contentContainer">
            <Quiz resultFunction={this.fetchResult} />
            {this.state.result.photo ?
              <div className="resultsInfo">
                <h3> Try this place! </h3>
                <img className="image" src={this.state.result.photo} />
                <p>Name: {this.state.result.info.name}</p>
                <p>Address: {this.state.result.info.formatted_address}</p>
              </div>
              : null
            }
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
    this.state = {
      answerNum: 0,
      answerString: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }
  handleClick(answer) {
    var i = this.state.answerNum;
    i++;
    this.setState({ answerNum: i });
    this.setState({ answerString: this.state.answerString + ' ' + answer });
    console.log(this.state);
  }

  handleResult(event) {
    this.props.resultFunction(this.state.answerString);
    console.log(this.state.answerString);
  }

  render() {
    var page = this.state.answerNum;
    switch (page) {
      case 0: return (
        <div id="quizContainer">
          <Image className="image" src="http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/166142726.jpg" rounded></Image>
          <p aria-label="Question" className="questionText">What is your budget?</p>
          <div className="answers">
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>$ Almost Free</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>$$ Little Money</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>$$$ Some Money</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>$$$$ No Budget</Button>
          </div>
        </div>
      );
      case 1: return (
        <div id="quizContainer">
          <Image className="image" src="http://www.worldatlas.com/aatlas/newart/continentslg.gif" rounded></Image>
          <p aria-label="Question" className="questionText">Where would you prefer to explore?</p>
          <div className="answers">
            <Button className="answerButton" onClick={(e) => { this.handleClick('america') } }>North America</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>No Preference</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('europe') } }>Europe</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('asia') } }>Asia</Button>
          </div>
        </div>
      );
      case 2: return (
        <div id="quizContainer">
          <Image className="image" src="http://www.familysmart.net/images/posts/family-travel-tips.jpg" rounded></Image>
          <p aria-label="Question" className="questionText">Who are you traveling with?</p>
          <div className="answers">
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>Me, Myself, and I</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('Romantic') } }>My Lover</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('Family') } }>My Family</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>My Friends</Button>
          </div>
        </div>
      );
      case 3: return (
        <div id="quizContainer">
          <Image className="image" src="http://wdy.h-cdn.co/assets/cm/15/09/54f0fbd48fba0_-_1-couple-vacation-tropical-lgn.jpg" rounded></Image>
          <p aria-label="Question" className="questionText">Why are you traveling?</p>
          <div className="answers">
            <Button className="answerButton" onClick={(e) => { this.handleClick('nightclub') } }>I Want to Celebrate</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('spa') } }>I Want to Escape and Relax</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('hiking') } }>I Want to Adventure and Explore</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('museum') } }>I want to Learn Something New</Button>
          </div>
        </div>
      );
      case 4: return (
        <div id="quizContainer">
          <Image className="image" src="https://www.visitnc.com/resimg.php/imgcrop/2/38377/preview/800/480/HikeWaterfall.jpg" rounded></Image>
          <p aria-label="Question" className="questionText">How Close Would You Like to be to Nature?</p>
          <div className="answers">
            <Button className="answerButton" onClick={(e) => { this.handleClick('park') } }>Super Close</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('waterfall') } }>Semi Close</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('lakes') } }>Not So Close</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>Nature? No thanks!</Button>
          </div>
        </div>
      );
      case 5: return (
        <div id="quizContainer">
          <Image className="image" src="http://images.r.cruisecritic.com/features/2016/03/10-lux-cruise-main.jpg" rounded></Image>
          <p aria-label="Question" className="questionText">How would you like to travel?</p>
          <div className="answers" onClick={this.fetchData}>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>Car or Bus</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('cruise') } }>Boat</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>Plane</Button>
            <Button className="answerButton" onClick={(e) => { this.handleClick('') } }>No Preference</Button>
          </div>
        </div>
      );
      case 6:
        return (
          <div aria-label="Results" id="quizContainer">
            <h3> RESULTS: </h3>
            <Button onClick={this.handleResult}>Show Results</Button>
          </div>
        );
    }

  }
}

export default Adventure;