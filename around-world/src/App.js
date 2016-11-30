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
      <div>
        <h2>Around the World</h2>
      </div>
    );
  }
}

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
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
            <Link to="/home" activeClassName="activeLink" className="nav-link">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="row">
          <h3 className="footertext">About Us:</h3>
          <br />
          <div className="col-md-3">
            <center>
              <img src="http://avatarbox.net/avatars/img29/mr_burns_sneaky_avatar_picture_14912.gif" className="img-circle" alt="the-brains" />
              <br />
              <h4 className="footertext">Sarah<p className="text-muted">Developer</p></h4>
              <p className="footertext">You can thank all the crazy programming here to this lady.</p><br />
            </center>
          </div>

          <div className="col-md-3">
            <center>
              <img src="http://www.phpbbguru.net/community/download/file.php?avatar=43539_1384745414.jpg" className="img-circle" alt="..." />
              <br />
              <h4 className="footertext">Jorge<p className="text-muted">Developer</p></h4>
              <p className="footertext">All the images here are hand drawn by this man.</p><br />
            </center>
          </div>

          <div className="col-md-3">
            <center>
              <img src="http://avatarbox.net/avatars/img19/homer_jamaica_avatar_picture_18399.gif" className="img-circle" alt="..." />
              <br />
              <h4 className="footertext">Joe<p className="text-muted">Developer</p></h4>
              <p className="footertext">This pretty site and the copy it holds are all thanks to this guy.</p><br />
            </center>
          </div>

          <div className="col-md-3">
            <center>
              <img src="http://www.animated-gifs.eu/category_cartoons/avatars-100x100-cartoons-spongebob/0038.gif" className="img-circle" alt="the-brains" />
              <br />
              <h4 className="footertext">Muhaamed<p className="text-muted">Developer</p></h4>
              <p className="footertext">You can thank all the crazy programming here to this guy.</p><br />
            </center>
          </div>

        </div>
      </div>
    );
  }
}


class Map extends React.Component {
  render() {
    return (
      <div id="mapPic">

      </div>
    )
  }

}
export default App;
