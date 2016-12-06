import React from 'react';
import { Link, hashHistory } from 'react-router';
import {Panel, Form, FormControl, InputGroup, Button, Glyphicon, Image} from 'react-bootstrap';
import './A_D_E.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Controller from './Controller';



class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 47.655548,
      lng: -122.303200,
      markers:[],
      zoom: 10
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(searchTerm) {
    var thisComponent = this;
    Controller.searchTMDB(searchTerm)
      .then(function(data) {
        var results = data.results;
        console.log(results[0].geometry.location);
        thisComponent.setState({lat:data.results[0].geometry.location.lat});
        thisComponent.setState({lng:data.results[0].geometry.location.lng});
        thisComponent.setState({markers:data.results});
        console.log(data);
        ;
      })
      .catch( (err) => this.setState({markers:[]}));
        
  }
  render() {
    var position = [this.state.lat, this.state.lng];
    {console.log(this.state)}
    return (
      <div >
      <h2>This is the Explore page</h2>
      <SearchForm searchFunction={this.fetchData} resultCount={this.state.markers.length}/>
        <div>
          <Map id="mapid" center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {<MarkList markers={this.state.markers}/>}
          </Map>
        </div>
      </div>
    );
  }
}

class MarkList extends React.Component {

  render() {
    var MarkRows = this.props.markers.map(function(mark){
      return <MarkRow loc={mark.geometry.location} name={mark.name} address={mark.formatted_address} rate={mark.rating} key={mark.id} />;
    })

    return (
      <div>
          {MarkRows}
      </div>
    );
  }
}

class MarkRow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var position = [this.props.loc.lat, this.props.loc.lng];
    console.log(this.props.mark);
    return (
      <div>
        <Marker position={position}>
          <Popup>
                <span>
                  <strong>{this.props.name}</strong> 
                  <br/><strong>Rating:</strong> {this.props.rate}
                  <br/><strong>Address:</strong> {this.props.address}
                </span>
          </Popup>
          </Marker>
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
            <Button onClick={this.handleClick}>Search</Button>
          </InputGroup.Button>
          <FormControl type="text" placeholder="Search for a place to visit..." onChange={this.handleChange} />
          <InputGroup.Addon>
            {this.props.resultCount} results
          </InputGroup.Addon>
        </InputGroup>
      </Form>
    );
  }
}

export default Explore;