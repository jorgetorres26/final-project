import React from 'react';
import { Link, hashHistory } from 'react-router';
import './Explore.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';



class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }
  render() {
    var position = [this.state.lat, this.state.lng];
    return (
      <div >
      <h1>This is the Explore page</h1>
        <div id="mapid">
          <Map style={{height: "180px"}} center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}


export default Explore;