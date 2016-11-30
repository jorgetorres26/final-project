import React from 'react';
import { Link, hashHistory } from 'react-router';
import './Explore.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';




class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.655548,
      lng: -122.303200,
      zoom: 13,
    };
  }
  render() {
    var position = [this.state.lat, this.state.lng];
    return (
      <div >
      <h2>This is the Explore page</h2>
        <div id="mapid">
          <Map style={{height: "180px"}} center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                <span>Its Map of UW campus bro. <br/> Easily customizable fam.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}

export default Explore;