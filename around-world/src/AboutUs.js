import React from 'react';
import logo from './logo.svg';
import './A_D_E.css';
import HomePage from './HomePage';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';

class AboutUs extends React.Component {
  render() {
    return (
      <div id="mapPic" role = "footer">
        
      <div className="container">

        <div className="row" id= "about">
          <h2 className="footertext" aria-label="About Us Page">About Us</h2>
          <br />
          <div>
            <p> Around the World is designed to help people find fun and exciting destinations to travel to. 
            It isn’t for users that have a specific goal in mind or want to purchase travel options here, 
            it is merely to allow people to see what is doable and help if they are just 
            starting the search for a vacation. We allow users to explore different 
            destinations around the world through the Explore secton to find places that may interest them and, 
            while also providing the Adventure
             quiz that may help them plan the trip with some insight as opposed to blindly looking 
            around the web for something they might not even enjoy. This is more tailored to the user. It  
            communicates information regarding locations on a map and special recommended destinations
            with fun and adventure in mind. This is a website geared towards giving 
            our users something new. </p>

             <p>
             Our Explore feature allows users to quickly search for destinations according to their moods and wants. The 
             Adventure feature contains a quiz that will ask the user for information like: budget, number of people, hobbies, etc to 
             determine destinations that are most suitable. The Discover section presents the top rated destinations per interest as picked 
             from our team of travelers and developers. Our team did a lot of research to hand-pick only the best destinations for each interest
            in the entire world.
            </p>
           
            

          </div>

          <div aria-label="Developers of the webpage">
            <div className="col-md-3">
              <center>
                <img aria-label="A photo of Sarah, one of the developers" src="https://scontent.xx.fbcdn.net/v/t1.0-9/1003641_10200266217803076_189927918_n.jpg?oh=909e0aff87262396060aac4628f49d93&oe=58FA4A45" className="img-circle" alt="the-brains" />
                <br />
                <h4 className="footertext" aria-label="Developer of the webpage" >Sarah<p className="text-muted">Developer</p></h4>
                <p className="footertext">With her love of excitement and adventure, this lady tries something new on every vacation. </p><br />
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img aria-label="A photo of Jorge, one of the developers" src="https://scontent.xx.fbcdn.net/v/t1.0-9/20091_10153459144589801_4524922121159965456_n.jpg?oh=ee00f0e4c17a3333d1cf01bd7d51848a&oe=58B2C242" className="img-circle" alt="..." />
                <br />
                <h4 className="footertext" aria-label="Developer of the webpage" >Jorge<p className="text-muted">Developer</p></h4>
                <p className="footertext"> Coming directly from the island of Puerto Rico, this man knows a thing or two about beaches.</p><br />
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img aria-label="A photo of Joe, one of the developers" src="https://scontent.xx.fbcdn.net/v/t1.0-9/13151594_1213068612044309_1817749460380821887_n.jpg?oh=60ee2ab84066df6b142c8ac52e8b8981&oe=58B5CA82" className="img-circle" alt="..." />
                <br />
                <h4 className="footertext" aria-label="Developer of the webpage" >Joe<p className="text-muted">Developer</p></h4>
                <p className="footertext">Being social a social guy, this man likes to explore with his friends whenever he can.</p><br />
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img aria-label="A photo of Muhaamed, one of the developers" src="https://scontent.xx.fbcdn.net/v/t1.0-9/12313853_118709101830538_5825856325060765546_n.jpg?oh=fcc1328344ccaea245127d1918aeaed7&oe=58BE7D8D" className="img-circle" alt="the-brains" />
                <br />
                <h4 className="footertext" aria-label="Developer of the webpage">Muhaamed<p className="text-muted">Developer</p></h4>
                <p className="footertext">With all his guys hard work, this man thinks about vacation often.</p><br />
              </center>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AboutUs;