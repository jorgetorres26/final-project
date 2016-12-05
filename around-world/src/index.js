import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Homepage from './HomePage';
import Explore from './Explore';
import Adventure from './Adventure';
import Discover from './Discover';
import AboutUs from './AboutUs';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

//<IndexRoute component={Homepage} />
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="home" component={Homepage}/>
    <Route path="explore" component={Explore}/>
    <Route path="adventure" component={Adventure}/>
    <Route path="discover" component={Discover}/>
    <Route path="about" component={AboutUs}/>
    </Route>
  </Router>,
  


  
  document.getElementById('root')
);

//I feel like there should be another reactDom here for the maps but not sure. I'll check it out though

