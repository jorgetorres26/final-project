import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Panel, Form, FormControl, InputGroup, Button, Glyphicon, Image} from 'react-bootstrap';
import './Explore.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Controller from './Controller';


class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.655548,
      lng: -122.303200,
      places:[],
      name:'',
      zoom: 4
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(searchTerm) {
    var thisComponent = this;
    Controller.searchTMDB(searchTerm)
      .then(function(data) {
        
        thisComponent.setState({places:data.results});
        console.log(data);
        ;
      })
      .catch( (err) => this.setState({places:[]}));
        
  }
  render() {
    var position = [this.state.lat, this.state.lng];
    {console.log(this.state)}
    return (
      <div >
      <h2>This is the Explore page</h2>
      <SearchForm searchFunction={this.fetchData} />
        <div id="mapid">
          <Map style={{height: "580px"}} center={position} zoom={this.state.zoom}>
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

class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:''}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleClick(event) {
    this.props.searchFunction(this.state.value);
  }

  render() {
    return (
      <Form>
        <InputGroup>
          <InputGroup.Button>
            <Button onClick={this.handleClick}>#</Button>
          </InputGroup.Button>
          <FormControl type="text" placeholder="Search for a video..." onChange={this.handleChange} />
          <InputGroup.Addon>
            {} results
          </InputGroup.Addon>
        </InputGroup>
      </Form>
    );
  }
}


export default Explore;