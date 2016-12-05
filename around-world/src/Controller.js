import 'whatwg-fetch'; //for polyfill


// Google Places API


var apiID = "gOHC802U44M0pbU7ePfA";
var appCode = "m9v00sr1v-N92_uq__epeA";

//module with functions to download a model from online
var controller = {
  searchTMDB: function(query) {
    //var resource = '&part=snippet'
    var key = "AIzaSyDPqNFY-8y3iThJr9cy5GxZO18Qo7iCmmQ";
    var baseUrl = "https://accesscontrolalloworiginall.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
    var tmdbUri = baseUrl+query+'&key='+key;
    console.log(tmdbUri);
    //console.log(fetch('https://www.googleapis.com/youtube/v3/videos?id=As2_UloSKDw&key=AIzaSyA-6GHSwcPBEmaZJQ2vSXaUzKPH7YJqvNU&part=snippet,statistics'));
    return fetch(tmdbUri)
      .then(function(res) {   
        return res.json()
      })
  }
}

export default controller;

