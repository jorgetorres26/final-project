import React from 'react';
import { Link, hashHistory } from 'react-router';



class Adventure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div >
      <h1>This is the Adventure page</h1>
        <StartQuiz/>
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
    this.state = {'active': false,
                  'class' : 'album',
                  'anotherOne': false};
    this.fetchData = this.fetchData.bind(this);
    this.fetchData();
    this.handleClick = this.handleClick.bind(this);
  }

}
export default Adventure;