import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Homepage from './HomePage';
import Explore from './Explore';
import Adventure from './Adventure';
import Discover from './Discover';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

//<IndexRoute component={Homepage} />
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path="home" component={Homepage}/>
    <Route path="explore" component={Explore}/>
    <Route path="adventure" component={Adventure}/>
    <Route path="discover" component={Discover}/>
    </Route>
    
    
      
  </Router>,
  
  document.getElementById('root')
);
