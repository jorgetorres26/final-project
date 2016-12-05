import 'whatwg-fetch'; //for polyfill


// Google Places API

var key = "AIzaSyDPqNFY-8y3iThJr9cy5GxZO18Qo7iCmmQ";
var baseUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";

//module with functions to download a model from online
var controller = {
  searchTMDB: function(query) {
    //var resource = '&part=snippet'
    var tmdbUri = baseUrl+query+'&key='+key;
    console.log(tmdbUri);
    //console.log(fetch('https://www.googleapis.com/youtube/v3/videos?id=As2_UloSKDw&key=AIzaSyA-6GHSwcPBEmaZJQ2vSXaUzKPH7YJqvNU&part=snippet,statistics'));
    return fetch(tmdbUri)
      .then(function(res) {
        res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods':'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'*',
                'Access-Control-Allow-Credentials': true});
        return res.json()
      })
  }
}

export default controller;
