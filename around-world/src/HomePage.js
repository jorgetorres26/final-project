import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Carousel, Button } from 'react-bootstrap';






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
              <img src="http://avatarbox.net/avatars/img19/homer_jamaica_avatar_picture_18399.gif" alt="location" />
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

            <div className="item">
              <img src="http://avatarbox.net/avatars/img19/homer_jamaica_avatar_picture_18399.gif" alt="location" />
              <div className="carousel-caption">
                <h3>Location</h3>
                <p>The description of the perticular location should be here.</p>
              </div>
            </div>

            <div className="item">
              <img src="http://www.animated-gifs.eu/category_cartoons/avatars-100x100-cartoons-spongebob/0038.gif" alt="location" />
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