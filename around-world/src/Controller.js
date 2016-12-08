import 'whatwg-fetch'; //for polyfill

// Google Places API

//functions to fetch a locations from google places from the users input
var controller = {
  searchMap: function(query) {

    var key2 = "AIzaSyCPmnAzqFlE4dK82-Gyh9lNzPVLTBKbx2A";
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
  },
  answerMap: function(query) {
    // first key was over used so we had to make another one
    var key = "AIzaSyCPmnAzqFlE4dK82-Gyh9lNzPVLTBKbx2A";

    console.log(query);
    var loc = query[1];
    var keyword = "query="+query[3];
    var type = "&types="+query[4];
    var locRad = "&sensor=false&location="+loc+"&radius=5000";
    console.log(locRad);
    //accesscontrolalloworiginall help enable the fetch without header-origin error and cors error
    var baseUrl = "https://accesscontrolalloworiginall.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?";
    //var newQuery = query.split(' ').join('+');
    var mapUri = baseUrl+keyword+locRad+'&key='+key;
    console.log(mapUri);
    return fetch(mapUri)
      .then(function(res) {
        //console.log(res);
        return res.json()
      })
  }
}

export default controller;

