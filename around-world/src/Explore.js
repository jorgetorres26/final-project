import React from 'react';
import { Link, hashHistory } from 'react-router';
import './Explore.css';



class Explore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
      <h1>This is the Explore page</h1>
        <div id="mapid">
        </div>
      </div>
    );
  }
}


<script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
export default Explore;