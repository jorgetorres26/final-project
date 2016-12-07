import 'whatwg-fetch'; //for polyfill

// Google Places API

//functions to fetch a locations from google places from the users input
var controller = {
  searchMap: function(query) {

    var key = "AIzaSyDPqNFY-8y3iThJr9cy5GxZO18Qo7iCmmQ";
    //console.log(query);
    //accesscontrolalloworiginall help enable the fetch without header-origin error and cors error
    var baseUrl = "https://accesscontrolalloworiginall.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
    //var newQuery = query.split(' ').join('+');
    var mapUri = baseUrl+query+'&key='+key;
    //console.log(mapUri);
    return fetch(mapUri)
      .then(function(res) {
        //console.log(res);
        return res.json()
      })
  }
}

export default controller;

