import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Carousel, Button } from 'react-bootstrap';
import './index.css';
import {arts,beaches,cycling,birding,business,
  camping,gambling,golfing,hiking,parks,nightlife,
  shopping,skiing,surfing,kayaking} from './Discover.js'


class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      
      <div className="container">
        <h2>This is the home page</h2>
       
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
            <li data-target="#myCarousel" data-slide-to="6"></li>
            <li data-target="#myCarousel" data-slide-to="7"></li>
            <li data-target="#myCarousel" data-slide-to="8"></li>
            <li data-target="#myCarousel" data-slide-to="9"></li>
            <li data-target="#myCarousel" data-slide-to="10"></li>
            <li data-target="#myCarousel" data-slide-to="11"></li>
            <li data-target="#myCarousel" data-slide-to="12"></li>
            <li data-target="#myCarousel" data-slide-to="13"></li>
            <li data-target="#myCarousel" data-slide-to="14"></li>
            
          </ol>


          <div className="carousel-inner" role="listbox">
            
            <div className="item active">
              <img src={arts[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{arts[0].loc}</h3>
                <p>{arts[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={beaches[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{beaches[0].loc}</h3>
                <p>{beaches[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={cycling[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{cycling[0].loc}</h3>
                <p>{cycling[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={birding[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{birding[0].loc}</h3>
                <p>{birding[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={business[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{business[0].loc}</h3>
                <p>{business[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={camping[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{camping[0].loc}</h3>
                <p>{camping[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={gambling[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{gambling[0].loc}</h3>
                <p>{gambling[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={golfing[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{golfing[0].loc}</h3>
                <p>{golfing[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={hiking[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{hiking[0].loc}</h3>
                <p>{hiking[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={parks[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{parks[0].loc}</h3>
                <p>{parks[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={nightlife[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{nightlife[0].loc}</h3>
                <p>{nightlife[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={shopping[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{shopping[0].loc}</h3>
                <p>{shopping[0].name}</p>
              </div>
            </div>

            <div className="item">
              <img src={skiing[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{skiing[0].loc}</h3>
                <p>{skiing[0].name}</p>
              </div>
            </div>

             <div className="item">
              <img src={surfing[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{surfing[0].loc}</h3>
                <p>{surfing[0].name}</p>
              </div>
            </div>
            
             <div className="item">
              <img src={kayaking[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>{kayaking[0].loc}</h3>
                <p>{kayaking[0].name}</p>
              </div>
            </div>

          
          </div>

          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>

     
    );
  }
}



export default Homepage;