import 'whatwg-fetch'; //for polyfill

// Google Places API

//functions to fetch a locations from google places from the users input
var controller = {
  searchMap: function(query) {
    // first key was over used so we had to make another one
    var key = "AIzaSyDPqNFY-8y3iThJr9cy5GxZO18Qo7iCmmQ";
    var key2 = "AIzaSyAWOXIjZamr-SLhYSnzbMm4_VGbQ9EBmPI";
    //console.log(query);
    //accesscontrolalloworiginall help enable the fetch without header-origin error and cors error
    var baseUrl = "https://accesscontrolalloworiginall.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
    //var newQuery = query.split(' ').join('+');
    var mapUri = baseUrl+query+'&key='+key2;
    //console.log(mapUri);
    return fetch(mapUri)
      .then(function(res) {
        //console.log(res);
        return res.json()
      })
  }
}

export default controller;

