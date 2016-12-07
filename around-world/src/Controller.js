import 'whatwg-fetch'; //for polyfill

// Google Places API

//functions to fetch a locations from google places from the users input
var controller = {
  searchMap: function(query) {

    var key = "AIzaSyDPqNFY-8y3iThJr9cy5GxZO18Qo7iCmmQ";

    //accesscontrolalloworiginall help enable the fetch without header-origin error and cors error
    var baseUrl = "https://accesscontrolalloworiginall.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
    var newQuery = query.split(' ').join('+');
    var mapUri = baseUrl+newQuery+'&key='+key;

    return fetch(mapUri)
      .then(function(res) {   
        return res.json()
      })
  }
}

export default controller;

