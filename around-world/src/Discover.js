import React from 'react';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css'
import _ from 'lodash';

/*
var endpoint = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';

var secondKey = 'AIzaSyBQgUwc76mlSVokScZ9DiPGhg9TjztXXgc';

new google.maps.places.Autocomplete(document.getElementById('autocomplete'));

service = new google.maps.places.PlacesService(map);

var key = '&key=AIzaSyDPqNFY-8y3iThJr9cy5GxZO18Qo7iCmmQ';

var interests = ['Arts', 'Beaches', 'Cycling', 'Birding', 
                'Business', 'Camping', 'Casinos', 
                'Golf', 'Hiking', 'Parks', 'Nightlife', 'Shopping', 
                'Skiing', 'Surfing', 'Kayaking', 'Racing', 
                'Sky Diving', 'Restaurants', 'Amusement Parks', 'Fishing',
                 'Horseriding']

var countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kuwait", "Kyrgyzstan", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]

// Shuffle Interests and keep 5 

var randomInterests = _.shuffle(interests);

console.log(randomInterests);

var top5RandomInterests = randomInterests.slice(0,5);

console.log(top5RandomInterests);


// Shuffle countries and keep 25 

var randomCountries = _.shuffle(countries);

console.log(randomCountries);

var top25RandomCountries = randomCountries.slice(0,25);

console.log(top25RandomCountries);

var firstInterestCountry1 = top5RandomInterests[0] + '%20in%20' + top25RandomCountries[0];
var firstInterestCountry2 = top5RandomInterests[0] + '%20in%20' + top25RandomCountries[1];
var firstInterestCountry3 = top5RandomInterests[0] + '%20in%20' + top25RandomCountries[2];
var firstInterestCountry4 = top5RandomInterests[0] + '%20in%20' + top25RandomCountries[3];
var firstInterestCountry5 = top5RandomInterests[0] + '%20in%20' + top25RandomCountries[4];

var secondInterestCountry6 = top5RandomInterests[1] + '%20in%20' + top25RandomCountries[5];
var secondInterestCountry7 = top5RandomInterests[1] + '%20in%20' + top25RandomCountries[6];
var secondInterestCountry8 = top5RandomInterests[1] + '%20in%20' + top25RandomCountries[7];
var secondInterestCountry9 = top5RandomInterests[1] + '%20in%20' + top25RandomCountries[8];
var secondInterestCountry10 = top5RandomInterests[1] + '%20in%20' + top25RandomCountries[9];

var thirdInterestCountry11 = top5RandomInterests[2] + '%20in%20' + top25RandomCountries[10];
var thirdInterestCountry12 = top5RandomInterests[2] + '%20in%20' + top25RandomCountries[11];
var thirdInterestCountry13 = top5RandomInterests[2] + '%20in%20' + top25RandomCountries[12];
var thirdInterestCountry14 = top5RandomInterests[2] + '%20in%20' + top25RandomCountries[13];
var thirdInterestCountry15 = top5RandomInterests[2] + '%20in%20' + top25RandomCountries[14];

var fourthInterestCountry16 = top5RandomInterests[3] + '%20in%20' + top25RandomCountries[15];
var fourthInterestCountry17 = top5RandomInterests[3] + '%20in%20' + top25RandomCountries[16];
var fourthInterestCountry18 = top5RandomInterests[3] + '%20in%20' + top25RandomCountries[17];
var fourthInterestCountry19 = top5RandomInterests[3] + '%20in%20' + top25RandomCountries[18];
var fourthInterestCountry20 = top5RandomInterests[3] + '%20in%20' + top25RandomCountries[19];

var fifthInterestCountry21 = top5RandomInterests[4] + '%20in%20' + top25RandomCountries[20];
var fifthInterestCountry22 = top5RandomInterests[4] + '%20in%20' + top25RandomCountries[21];
var fifthInterestCountry23 = top5RandomInterests[4] + '%20in%20' + top25RandomCountries[22];
var fifthInterestCountry24 = top5RandomInterests[4] + '%20in%20' + top25RandomCountries[23];
var fifthInterestCountry25 = top5RandomInterests[4] + '%20in%20' + top25RandomCountries[24];

console.log(firstInterestCountry1);
console.log(firstInterestCountry2);
console.log(thirdInterestCountry11);
console.log(fifthInterestCountry21);



var url = endpoint + firstInterestCountry1 + key;
console.log(url);

var request = new
Request(url);

fetch(url).then(function(response){
  return response.json().then(function(json){
    console.log(json.results.name);
  })
})

*/

var places = 
{ Arts :
  [
    { name: "Louvre Museum", city: "Paris, France", site: "https://www.google.com/maps/place/Louvre+Museum", }, 
    { name: "Millennium Park", city: "Chicago, USA", site: "https://www.google.com/maps/place/Millennium+Park+Chicago"}, 
    { name: "Goreme Open Air Museum", city: "Goreme, Turkey", site: "https://www.google.com/maps/place/Goreme+Open+Air+Museum+Turkey"},
    { name: "Metropolitan Museum of Art", city: "New York City, USA", site: "https://www.google.com/maps/place/Metropolitan+Museum+of+Art+New+York"},
    { name: "Rijksmuseum", city: "Amsterdam, Netherlands", site: "https://www.google.com/maps/place/Rijksmuseum+Amsterdam"},
    { name: "Museo Reina Sofia", city: "Madrid, Spain", site: "https://www.google.com/maps/place/Museo+Reina+Sofia+Madrid"}, 
    { name: "Santa Maria delle Grazie", city: "Milan, Italy", site: "https://www.google.com/maps/place/Santa+Maria+delle+Grazie+Milan"},
    { name: "Storm King Art Center", city: "New York State, USA", site: "https://www.google.com/maps/place/Storm+King+Art+Center+New+York"},
    { name: "Lakshman Temple", city: "Khajuraho, India", site: "https://www.google.com/maps/place/Lakshman+Temple+India"},
    { name: "Museo Nacional de Antropologia", city: "Mexico City, Mexico", site: "https://www.google.com/maps/place/Museo+Nacional+de+Antropologia+Mexico"}
  ] ,
  Beaches:
  [
    { name: "Punta Cana", city: "Punta Cana, Dominican Republic", site: "https://www.google.com/maps/place/punta+cana", }, 
    { name: "Playa Flamenco", city: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico"}, 
    { name: "Playa del Carmen", city: "Yucatan, Mexico", site: "https://www.google.com/maps/place/Playa+del+Carmen+Mexico"},
    { name: "Maui Beach", city: "Hawaii, USA", site: "https://www.google.com/maps/place/Maui+Hawaii"},
    { name: "South Beach", city: "Miami, USA", site: "https://www.google.com/maps/place/South+Beach+Miami"},
    { name: "Nai Harn Beach", city: "Phuket Island, Thailand", site: "https://www.google.com/maps/place/Coronado+Beach+San+Diego"}, 
    { name: "Coronado Beach", city: "San Diego, USA", site: "https://www.google.com/maps/place/Santa+Maria+delle+Grazie+Milan"},
    { name: "Bondi Beach", city: "Sydney, Australia", site: "https://www.google.com/maps/place/Bondi+Beach+Sydney+Australia"},
    { name: "Bora Bora", city: "French Polynesia", site: "https://www.google.com/maps/place/bora+bora"},
    { name: "Palm Beach", city: "Aruba", site: "https://www.google.com/maps/place/palm+beach+aruba"}
  ] ,

  Cycling:
  [
    { name: "Serra da Estrela Mountains", city: "Covilhã, Portugal", site: "https://www.google.com/maps/place/Serra+da+Estrela+Covilhã+Portugal", }, 
    { name: "Lake Song-Kol", city: "Kochkor, Kyrgyzstan", site: "https://www.google.com/maps/place/Lake+Song-Kol+Kyrgyzstan"}, 
    { name: "Mekong River", city: "Phnom Penh, Cambodia", site: "https://www.google.com/maps/place/Mekong+River+Phnom+Penh+Cambodia"},
    { name: "Tasmania Island", city: "Australia", site: "https://www.google.com/maps/place/Tasmania+Island+Australia"},
    { name: "Route 395", city: "Oregon Coast, USA", site: "https://www.google.com/maps/place/Brookings+Oregon"},
    { name: "The Dolomites", city: "Bolzano, Italy", site: "https://www.google.com/maps/place/The+Dolomites+Italy"}, 
    { name: "Shiraz to Yazd", city: "Iran", site: "https://www.google.com/maps/place/Shiraz+Iran"},
    { name: "Zagora to Tafraoute", city: "Morocco", site: "https://www.google.com/maps/place/Zagora+Morocco"},
    { name: "Molesworth Road", city: "Molesworth, New Zealand", site: "https://www.google.com/maps/place/Molesworth+New+Zealand"},
    { name: "Turkey Interior", city: "Bergama, Turkey", site: "https://www.google.com/maps/place/Bergama+Turkey"}
  ] ,

  Birding:
  [
    { name: "Manu National Park", city: "Manu, Peru", site: "https://www.google.com/maps/place/Manu+National+Park+Peru", }, 
    { name: "Cape May", city: "New Jersey, USA", site: "https://www.google.com/maps/place/Cape+May+Birding+New+Jersey"}, 
    { name: "Kruger National Park", city: "Kruger, South Africa", site: "https://www.google.com/maps/place/Kruger+National+Park+South+Africa"},
    { name: "Tandayapa Bird Lodge", city: "Quito, Ecuador", site: "https://www.google.com/maps/place/Tandayapa+Bird+Lodge+Ecuador"},
    { name: "Coto Doñana National Park", city: "Almonte, Spain", site: "https://www.google.com/maps/place/Coto+Doñana+Almonte+Spain"},
    { name: "Kalimantan", city: "Borneo, Malaysia", site: "https://www.google.com/maps/place/Borneo+Birding+malaysia"}, 
    { name: "Rondon Ridge", city: "Mount Hagen, Papua New Guinea", site: "https://www.google.com/maps/place/Mount+Hagen+Papua+New+Guinea"},
    { name: "Atherton Tablelands", city: "Cairns, Australia", site: "https://www.google.com/maps/place/Cairns+Australia"},
    { name: "Panama Canal", city: "Panama City, Panama", site: "https://www.google.com/maps/place/Canopy+Tower+Panama"},
    { name: "Jigme Dorji", city: "Thimphu, Bhutan", site: "https://www.google.com/maps/place/Jigme+Dorji+Bhutan"}
  ] , 

  Business:
  [
    { name: "London", city: "United Kingdom", site: "https://www.google.com/maps/place/london+uk", }, 
    { name: "Sydney", city: "Australia", site: "https://www.google.com/maps/place/sydney+australia"}, 
    { name: "Toronto", city: "Canada", site: "https://www.google.com/maps/place/toronto+canada"},
    { name: "Hong Kong", city: "China", site: "https://www.google.com/maps/place/hong+kong+china"},
    { name: "Mexico City", city: "Mexico", site: "https://www.google.com/maps/place/Mexico+City"},
    { name: "Madrid", city: "Spain", site: "https://www.google.com/maps/place/Madrid+Spain"}, 
    { name: "New York City", city: "USA", site: "https://www.google.com/maps/place/new+york+city"},
    { name: "Chicago", city: "USA", site: "https://www.google.com/maps/place/Chicago+Illinois"},
    { name: "Washington, DC", city: "USA", site: "https://www.google.com/maps/place/Washington+DC"},
    { name: "Rio de Janeiro", city: "Brazil", site: "https://www.google.com/maps/place/Rio+de+Janeiro"}
  ] ,

  Camping:
  [
    { name: "Yosemite National Park", city: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park" }, 
    { name: "Boya Lake Provincial Park", city: "British Columbia, Canada", site: "https://www.google.com/maps/place/Boya+Lake+Provincial+Park+British+Columbia+Canada"}, 
    { name: "Miyajima Island", city: "Miyajima, Japan", site: "https://www.google.com/maps/place/Miyajima+Island+Japan"},
    { name: "The Isle of Arran", city: "Arran, Scotland", site: "https://www.google.com/maps/place/The+Isle+of+Arran+Scotland"},
    { name: "Playa Flamenco", city: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico"},
    { name: "Corcovado National Park", city: "Playa Caletas de Osa, Costa Rica", site: "https://www.google.com/maps/place/Corcovado+National+Park+Costa+Rica"}, 
    { name: "Sahara Desert", city: "Ouarzazate, Morocco", site: "https://www.google.com/maps/place/sahara+desert+morocco"},
    { name: "Yellowstone National Park", city: "Wyoming, USA", site: "https://www.google.com/maps/place/Yellowstone+National+Park"},
    { name: "Lake Myvatn", city: "Reykjahlid, Iceland", site: "https://www.google.com/maps/place/Lake+Myvatn+Iceland"},
    { name: "Grand Canyon", city: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon"}
  ], 

  Gambling:
  [
    { name: "Niagara Falls", city: "Niagara Falls, USA / Canada", site: "https://www.google.com/maps/place/Niagara+Falls", }, 
    { name: "Downtown Nassau", city: "Nassau, Bahamas", site: "https://www.google.com/maps/place/Downtown+Nassau+Bahamas"}, 
    { name: "Palm Beach", city: "Noord, Aruba", site: "https://www.google.com/maps/place/Palm+Beach+Smith+Blvd+Noord+Aruba"},
    { name: "Condado", city: "San Juan, Puerto Rico", site: "https://www.google.com/maps/place/condado+san+juan+puerto+rico"},
    { name: "Reno", city: "Nevada, USA", site: "https://www.google.com/maps/place/Casinos+in+Reno+Nevada"},
    { name: "Monte Carlo", city: "Monte Carlo, Monaco", site: "https://www.google.com/maps/place/Casinos+In+Monte+carlo+Monaco"}, 
    { name: "Southeast Connecticut", city: "Connecticut, USA", site: "https://www.google.com/maps/place/1+Mohegan+Sun+Blvd,+Uncasville,+CT+06382"},
    { name: "Atlantic City", city: "New Jersey, USA", site: "https://www.google.com/maps/place/Atlantic+City+New+Jersey"},
    { name: "Macau", city: "Macau, China", site: "https://www.google.com/maps/place/Macau+China"},
    { name: "Maho Beach", city: "Saint Maarten", site: "https://www.google.com/maps/place/Maho+Beach+Saint+Maarten"}
  ], 

  Golfing:
  [
    { name: "Playa Grande", city: "Cabrera, Dominican Republic", site: "https://www.google.com/maps/place/Playa+Grande+Dominican+Republic", }, 
    { name: "Hazeltine National Golf Club", city: "Minnesota, USA", site: "https://www.google.com/maps/place/Hazeltine+Golf+Chaska+Minnesota"}, 
    { name: "Maderas Golf Club", city: "California, USA", site: "https://www.google.com/maps/place/Maderas+Golf+Poway+California"},
    { name: "Austin Country Club", city: "Texas, USA", site: "https://www.google.com/maps/place/4408+Long+Champ+Dr,+Austin,+TX+78746"},
    { name: "TPC Harding Park", city: "California, USA", site: "https://www.google.com/maps/place/TPC+Harding+Park+San+Francisco"},
    { name: "Turtle Point", city: "South Carolina, USA", site: "https://www.google.com/maps/place/Turtle+Point+Kiawah+Island"}, 
    { name: "West at Gull Lake View Golf Club", city: "Michigan, USA", site: "https://www.google.com/maps/place/Gull+Golf+Augusta+Michigan"},
    { name: "Wickenburg Ranch Golf Course", city: "Arizona, USA", site: "https://www.google.com/maps/place/Wickenburg+Ranch+Golf"},
    { name: "Cape Breton Island", city: "Nova Scotia, Canada", site: "https://www.google.com/maps/place/Cape+Breton+Island"},
    { name: "Royal Troon Golf Club", city: "Troon, Scotland", site: "https://www.google.com/maps/place/Craigend+Rd,+Troon+KA10+6EP,+UK"}
  ],

  Hiking:
  [
    { name: "Abisko National Park", city: "Abisko, Sweden", site: "https://www.google.com/maps/place/Abisko+National+Park", }, 
    { name: "Grand Canyon", city: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon"}, 
    { name: "Mount Everest", city: "Sagarmatha, Nepal", site: "https://www.google.com/maps/place/Mount+Everest"},
    { name: "Monte Fitz Roy", city: "Patagonia, Argentina", site: "https://www.google.com/maps/place/Monte+Fitz+Roy"},
    { name: "Dana Reserve", city: "Dana, Jordan", site: "https://www.google.com/maps/place/Dana+Reserve+Jordan"},
    { name: "Bernese Alps", city: "Grindelwald, Switzerland", site: "https://www.google.com/maps/place/Bernese+Alps+Switzerland"}, 
    { name: "Yosemite National Park", city: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park"},
    { name: "Chilkoot Trail", city: "Alaska, USA", site: "https://www.google.com/maps/place/Chilkoot+Trail+Skagway+Alaska"},
    { name: "Queen Charlotte Track", city: "Marlborough Sounds, New Zealand", site: "https://www.google.com/maps/place/Marlborough+Sounds+New+Zealand"},
    { name: "Mountains of the Moon", city: "Rwenzori, Uganda", site: "https://www.google.com/maps/place/Rwenzori+Mountains+Uganda"}
  ],

}

/*

 Array.prototype.shuffle = function(){
        for (var i = 0; i < this.length; i++){
            var a = this[i];
            var b = Math.floor(Math.random() * this.length);
            this[i] = this[b];
            this[b] = a;
        }
    }
    
    places = shuffleProperties(places); // run shuffle
    
    function shuffleProperties(places) {
        var new_obj = {};
        var keys = getKeys(places);
        keys.shuffle();
        for (var key in keys){
            if (key == "shuffle") continue; // skip our prototype method
            new_obj[keys[key]] = places[keys[key]];
        }
        console.log(new_obj);
        return new_obj;
    }
    
    function getKeys(obj){
        var arr = new Array();
        for (var key in obj)
            arr.push(key);
        var newarr = _.shuffle(arr)
        console.log(newarr);
        return newarr;
        
    }
*/






console.log(places.Camping[4].site);



class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'places': "", 
                  'name': "",
                  'city' : "",
                  'site': ""};
  }
  render() {
    return (
      <div>
        <h2> Discover </h2>
        <h3> Arts </h3>
        <div className="row">
          <div className="col-md-4">
          <img className="card-img-top" src="http://replygif.net/thumbnail/925.gif" alt="Card image cap"/>
            <div className="card card-block">
              <h3 className="card-title">Special title treatment</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="col-md-4">
          <img className="card-img-top" src="http://replygif.net/thumbnail/925.gif" alt="Card image cap"/>
            <div className="card card-block">
              <h3 className="card-title">Special title treatment</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="col-md-4">
          <img className="card-img-top" src="http://replygif.net/thumbnail/925.gif" alt="Card image cap"/>
            <div className="card card-block">
              <h3 className="card-title">Special title treatment</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;