import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Carousel, Button } from 'react-bootstrap';
import './index.css';
import {arts} from './Discover.js'







class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <h2>This is the home page</h2>
       
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
           
          </ol>


          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="https://s-media-cache-ak0.pinimg.com/originals/6e/aa/5d/6eaa5ddf4a67aca7e6c3f3f73d185076.jpg" alt="location" />
              <div className="carousel-caption">
                <h3>Dubai</h3>
                <p>The Burj Khalifa is a megatall skyscraper in Dubai, 
                United Arab Emirates. It is the tallest structure 
                in the world, standing at 829.8 m</p>
              </div>
            </div>

            <div className="item">
              <img src="http://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg" alt="location" />
              <div className="carousel-caption">
                <h3>Egypt</h3>
                <p>The Great Pyramid of Giza is the oldest 
                and largest of the three pyramids in the Giza 
                pyramid complex bordering what is now El Giza, 
                Egypt. It is the oldest of the Seven Wonders of 
                the Ancient World, and the only one to remain largely intact.</p>
              </div>
            </div>

            <div className="item">
              <img src="https://media-cdn.tripadvisor.com/media/photo-p/07/7d/81/00/girls-on-the-current.jpg" alt="location" />
              <div className="carousel-caption">
                <h3>Bahamas(Atlantis)</h3>
                <p>Visit Atlantis and have an experience you have never had before,
                Atlantis is the paradise on earth with so much adventure that will 
                blow your mind</p>
              </div>
            </div>

            <div className="item">
              <img src={arts[0].photo} alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
              </div>
            </div>

            <div className="item">
              <img src="http://4.bp.blogspot.com/-QPT_vEZdYcc/VPV6jSHYbdI/AAAAAAAAAPI/sFVQx0KHfmA/s1600/54ac66dd-68de-4999-9231-bc674d21980d_Pemandangan-matahari-tenggelam-di-Ujung-Genteng.jpg" alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
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