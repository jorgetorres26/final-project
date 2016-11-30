import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
        <Map/>
      </div>
    );
  }
}

class Header extends React.Component{
  render() {
    return (
        <div>
          <h2>Around the World</h2>
        </div> 
    );
  }
}

class NavBar extends React.Component{

  render() {
    return (
      <Nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Explore <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Adventure</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Discover</a>
          </li>
        </ul>
      </Nav>
    );
  }
}

class Map extends React.Component{
  render() {
    return (
      <div id="mapPic">
        
      </div>
    )
  }

}
export default App;
