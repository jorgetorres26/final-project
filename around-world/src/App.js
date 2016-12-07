import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <main className="container" >
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      
      <div id = "banner">
        <h1>Around the World</h1>
      </div>
    );
  }
}

class NavBar extends React.Component {

  render() {
    return (
      <Nav className="navbar navbar-light bg-faded" role = "navigation">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/home" activeClassName="activeLink" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/explore" activeClassName="activeLink" className="nav-link">Explore</Link>
          </li>
          <li className="nav-item">
            <Link to="/adventure" activeClassName="activeLink" className="nav-link">Adventure</Link>
          </li>
          <li className="nav-item">
            <Link to="/discover" activeClassName="activeLink" className="nav-link">Discover</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" activeClassName="activeLink" className="nav-link">About Us</Link>
          </li>
        </ul>
      </Nav>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      null
    );
  }
}


class Map extends React.Component {
  render() {
    return (
      <div id="mapPic" role = "interactive map">

      </div>
    )}

}
export default App;
