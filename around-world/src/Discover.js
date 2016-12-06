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

var places = 
{ Arts :
  [
    { name: "Louvre Museum", loc: "Paris, France", site: "https://www.google.com/maps/place/Louvre+Museum", photo: "http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg"}, 
    { name: "Millennium Park", loc: "Chicago, USA", site: "https://www.google.com/maps/place/Millennium+Park+Chicago"}, 
    { name: "Goreme Open Air Museum", loc: "Goreme, Turkey", site: "https://www.google.com/maps/place/Goreme+Open+Air+Museum+Turkey"},
    { name: "Metropolitan Museum of Art", loc: "New York loc, USA", site: "https://www.google.com/maps/place/Metropolitan+Museum+of+Art+New+York"},
    { name: "Rijksmuseum", loc: "Amsterdam, Netherlands", site: "https://www.google.com/maps/place/Rijksmuseum+Amsterdam"},
    { name: "Museo Reina Sofia", loc: "Madrid, Spain", site: "https://www.google.com/maps/place/Museo+Reina+Sofia+Madrid"}, 
    { name: "Santa Maria delle Grazie", loc: "Milan, Italy", site: "https://www.google.com/maps/place/Santa+Maria+delle+Grazie+Milan"},
    { name: "Storm King Art Center", loc: "New York State, USA", site: "https://www.google.com/maps/place/Storm+King+Art+Center+New+York"},
    { name: "Lakshman Temple", loc: "Khajuraho, India", site: "https://www.google.com/maps/place/Lakshman+Temple+India"},
    { name: "Museo Nacional de Antropologia", loc: "Mexico City, Mexico", site: "https://www.google.com/maps/place/Museo+Nacional+de+Antropologia+Mexico"}
  ] ,
  Beaches:
  [
    { name: "Punta Cana", loc: "Punta Cana, Dominican Republic", site: "https://www.google.com/maps/place/punta+cana", }, 
    { name: "Playa Flamenco", loc: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico"}, 
    { name: "Playa del Carmen", loc: "Yucatan, Mexico", site: "https://www.google.com/maps/place/Playa+del+Carmen+Mexico"},
    { name: "Maui Beach", loc: "Hawaii, USA", site: "https://www.google.com/maps/place/Maui+Hawaii"},
    { name: "South Beach", loc: "Miami, USA", site: "https://www.google.com/maps/place/South+Beach+Miami"},
    { name: "Nai Harn Beach", loc: "Phuket Island, Thailand", site: "https://www.google.com/maps/place/Coronado+Beach+San+Diego"}, 
    { name: "Coronado Beach", loc: "San Diego, USA", site: "https://www.google.com/maps/place/Santa+Maria+delle+Grazie+Milan"},
    { name: "Bondi Beach", loc: "Sydney, Australia", site: "https://www.google.com/maps/place/Bondi+Beach+Sydney+Australia"},
    { name: "Bora Bora", loc: "French Polynesia", site: "https://www.google.com/maps/place/bora+bora"},
    { name: "Palm Beach", loc: "Aruba", site: "https://www.google.com/maps/place/palm+beach+aruba"}
  ] ,

  Cycling:
  [
    { name: "Serra da Estrela Mountains", loc: "Covilhã, Portugal", site: "https://www.google.com/maps/place/Serra+da+Estrela+Covilhã+Portugal", }, 
    { name: "Lake Song-Kol", loc: "Kochkor, Kyrgyzstan", site: "https://www.google.com/maps/place/Lake+Song-Kol+Kyrgyzstan"}, 
    { name: "Mekong River", loc: "Phnom Penh, Cambodia", site: "https://www.google.com/maps/place/Mekong+River+Phnom+Penh+Cambodia"},
    { name: "Tasmania Island", loc: "Australia", site: "https://www.google.com/maps/place/Tasmania+Island+Australia"},
    { name: "Route 395", loc: "Oregon Coast, USA", site: "https://www.google.com/maps/place/Brookings+Oregon"},
    { name: "The Dolomites", loc: "Bolzano, Italy", site: "https://www.google.com/maps/place/The+Dolomites+Italy"}, 
    { name: "Shiraz to Yazd", loc: "Iran", site: "https://www.google.com/maps/place/Shiraz+Iran"},
    { name: "Zagora to Tafraoute", loc: "Morocco", site: "https://www.google.com/maps/place/Zagora+Morocco"},
    { name: "Molesworth Road", loc: "Molesworth, New Zealand", site: "https://www.google.com/maps/place/Molesworth+New+Zealand"},
    { name: "Turkey Interior", loc: "Bergama, Turkey", site: "https://www.google.com/maps/place/Bergama+Turkey"}
  ] ,

  Birding:
  [
    { name: "Manu National Park", loc: "Manu, Peru", site: "https://www.google.com/maps/place/Manu+National+Park+Peru", }, 
    { name: "Cape May", loc: "New Jersey, USA", site: "https://www.google.com/maps/place/Cape+May+Birding+New+Jersey"}, 
    { name: "Kruger National Park", loc: "Kruger, South Africa", site: "https://www.google.com/maps/place/Kruger+National+Park+South+Africa"},
    { name: "Tandayapa Bird Lodge", loc: "Quito, Ecuador", site: "https://www.google.com/maps/place/Tandayapa+Bird+Lodge+Ecuador"},
    { name: "Coto Doñana National Park", loc: "Almonte, Spain", site: "https://www.google.com/maps/place/Coto+Doñana+Almonte+Spain"},
    { name: "Kalimantan", loc: "Borneo, Malaysia", site: "https://www.google.com/maps/place/Borneo+Birding+malaysia"}, 
    { name: "Rondon Ridge", loc: "Mount Hagen, Papua New Guinea", site: "https://www.google.com/maps/place/Mount+Hagen+Papua+New+Guinea"},
    { name: "Atherton Tablelands", loc: "Cairns, Australia", site: "https://www.google.com/maps/place/Cairns+Australia"},
    { name: "Panama Canal", loc: "Panama loc, Panama", site: "https://www.google.com/maps/place/Canopy+Tower+Panama"},
    { name: "Jigme Dorji", loc: "Thimphu, Bhutan", site: "https://www.google.com/maps/place/Jigme+Dorji+Bhutan"}
  ] , 

  Business:
  [
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/london+uk", }, 
    { name: "Sydney", loc: "Australia", site: "https://www.google.com/maps/place/sydney+australia"}, 
    { name: "Toronto", loc: "Canada", site: "https://www.google.com/maps/place/toronto+canada"},
    { name: "Hong Kong", loc: "China", site: "https://www.google.com/maps/place/hong+kong+china"},
    { name: "Mexico loc", loc: "Mexico", site: "https://www.google.com/maps/place/Mexico+loc"},
    { name: "Madrid", loc: "Spain", site: "https://www.google.com/maps/place/Madrid+Spain"}, 
    { name: "New York City", loc: "USA", site: "https://www.google.com/maps/place/new+york+loc"},
    { name: "Chicago", loc: "USA", site: "https://www.google.com/maps/place/Chicago+Illinois"},
    { name: "Washington, DC", loc: "USA", site: "https://www.google.com/maps/place/Washington+DC"},
    { name: "Rio de Janeiro", loc: "Brazil", site: "https://www.google.com/maps/place/Rio+de+Janeiro"}
  ] ,

  Camping:
  [
    { name: "Yosemite National Park", loc: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park" }, 
    { name: "Boya Lake Provincial Park", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Boya+Lake+Provincial+Park+British+Columbia+Canada"}, 
    { name: "Miyajima Island", loc: "Miyajima, Japan", site: "https://www.google.com/maps/place/Miyajima+Island+Japan"},
    { name: "The Isle of Arran", loc: "Arran, Scotland", site: "https://www.google.com/maps/place/The+Isle+of+Arran+Scotland"},
    { name: "Playa Flamenco", loc: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico"},
    { name: "Corcovado National Park", loc: "Playa Caletas de Osa, Costa Rica", site: "https://www.google.com/maps/place/Corcovado+National+Park+Costa+Rica"}, 
    { name: "Sahara Desert", loc: "Ouarzazate, Morocco", site: "https://www.google.com/maps/place/sahara+desert+morocco"},
    { name: "Yellowstone National Park", loc: "Wyoming, USA", site: "https://www.google.com/maps/place/Yellowstone+National+Park"},
    { name: "Lake Myvatn", loc: "Reykjahlid, Iceland", site: "https://www.google.com/maps/place/Lake+Myvatn+Iceland"},
    { name: "Grand Canyon", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon"}
  ], 

  Gambling:
  [
    { name: "Niagara Falls", loc: "Niagara Falls, USA / Canada", site: "https://www.google.com/maps/place/Niagara+Falls", }, 
    { name: "Downtown Nassau", loc: "Nassau, Bahamas", site: "https://www.google.com/maps/place/Downtown+Nassau+Bahamas"}, 
    { name: "Palm Beach", loc: "Noord, Aruba", site: "https://www.google.com/maps/place/Palm+Beach+Smith+Blvd+Noord+Aruba"},
    { name: "Condado", loc: "San Juan, Puerto Rico", site: "https://www.google.com/maps/place/condado+san+juan+puerto+rico"},
    { name: "Reno", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Casinos+in+Reno+Nevada"},
    { name: "Monte Carlo", loc: "Monte Carlo, Monaco", site: "https://www.google.com/maps/place/Casinos+In+Monte+carlo+Monaco"}, 
    { name: "Southeast Connecticut", loc: "Connecticut, USA", site: "https://www.google.com/maps/place/1+Mohegan+Sun+Blvd,+Uncasville,+CT+06382"},
    { name: "Atlantic loc", loc: "New Jersey, USA", site: "https://www.google.com/maps/place/Atlantic+loc+New+Jersey"},
    { name: "Macau", loc: "Macau, China", site: "https://www.google.com/maps/place/Macau+China"},
    { name: "Las Vegas", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Las+Vegas+Strip", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"}
  ], 

  Golfing:
  [
    { name: "Playa Grande", loc: "Cabrera, Dominican Republic", site: "https://www.google.com/maps/place/Playa+Grande+Dominican+Republic", }, 
    { name: "Hazeltine National Golf Club", loc: "Minnesota, USA", site: "https://www.google.com/maps/place/Hazeltine+Golf+Chaska+Minnesota"}, 
    { name: "Maderas Golf Club", loc: "California, USA", site: "https://www.google.com/maps/place/Maderas+Golf+Poway+California"},
    { name: "Austin Country Club", loc: "Texas, USA", site: "https://www.google.com/maps/place/4408+Long+Champ+Dr,+Austin,+TX+78746"},
    { name: "TPC Harding Park", loc: "California, USA", site: "https://www.google.com/maps/place/TPC+Harding+Park+San+Francisco"},
    { name: "Turtle Point", loc: "South Carolina, USA", site: "https://www.google.com/maps/place/Turtle+Point+Kiawah+Island"}, 
    { name: "West at Gull Lake View Golf Club", loc: "Michigan, USA", site: "https://www.google.com/maps/place/Gull+Golf+Augusta+Michigan"},
    { name: "Wickenburg Ranch Golf Course", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Wickenburg+Ranch+Golf"},
    { name: "Cape Breton Island", loc: "Nova Scotia, Canada", site: "https://www.google.com/maps/place/Cape+Breton+Island"},
    { name: "Royal Troon Golf Club", loc: "Troon, Scotland", site: "https://www.google.com/maps/place/Craigend+Rd,+Troon+KA10+6EP,+UK"}
  ],

  Hiking:
  [
    { name: "Abisko National Park", loc: "Abisko, Sweden", site: "https://www.google.com/maps/place/Abisko+National+Park", }, 
    { name: "Grand Canyon", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon"}, 
    { name: "Mount Everest", loc: "Sagarmatha, Nepal", site: "https://www.google.com/maps/place/Mount+Everest"},
    { name: "Monte Fitz Roy", loc: "Patagonia, Argentina", site: "https://www.google.com/maps/place/Monte+Fitz+Roy"},
    { name: "Dana Reserve", loc: "Dana, Jordan", site: "https://www.google.com/maps/place/Dana+Reserve+Jordan"},
    { name: "Bernese Alps", loc: "Grindelwald, Switzerland", site: "https://www.google.com/maps/place/Bernese+Alps+Switzerland"}, 
    { name: "Yosemite National Park", loc: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park"},
    { name: "Chilkoot Trail", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Chilkoot+Trail+Skagway+Alaska"},
    { name: "Queen Charlotte Track", loc: "Marlborough Sounds, New Zealand", site: "https://www.google.com/maps/place/Marlborough+Sounds+New+Zealand"},
    { name: "Mountains of the Moon", loc: "Rwenzori, Uganda", site: "https://www.google.com/maps/place/Rwenzori+Mountains+Uganda"}
  ],

  Parks:
  [
    { name: "Stanley Park", loc: "Vancouver, Canada", site: "https://www.google.com/maps/place/Stanley+Park+Vancouver", photo: "http://i.amz.mshcdn.com/YuIyXsRIpB_6A4N5UkBp4geMr94=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fstanley-park.jpg" }, 
    { name: "Garden of the Gods", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Garden+of+the+Gods+Colorado+Springs", photo: "http://i.amz.mshcdn.com/10r0e3Z62EnX0afR-6fUCAElc1o=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fgarden-of-the-gods.jpg"}, 
    { name: "Central Park", loc: "New York, USA", site: "https://www.google.com/maps/place/Central+Park+nyc", photo: "http://i.amz.mshcdn.com/0UBK9CvlCEDVdhzeFnlVIvmm4Mo=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fcentral-park.jpg"},
    { name: "Millenium Park", loc: "Chicago, USA", site: "https://www.google.com/maps/place/Millenium+Park+Chicago", photo: "http://i.amz.mshcdn.com/0aug5PS6V5iLiCNsWihzef7K52w=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fmillenium-park.jpg"},
    { name: "The High Line", loc: "New York, USA", site: "https://www.google.com/maps/place/The+High+Line+New+York", photo: "http://i.amz.mshcdn.com/O92Sa1bpuM3wxuTFd2gWtg7LVfI=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fthe-high-line.jpg"},
    { name: "Kings Park and Botanical Garden", loc: "Perth, Australia", site: "https://www.google.com/maps/place/Kings+Park+Perth+Australia"}, 
    { name: "Park Güell", loc: "Barcelona, Spain", site: "https://www.google.com/maps/place/Park+Güell+Barcelona", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Park_G%C3%BCell_02.jpg/330px-Park_G%C3%BCell_02.jpg"},
    { name: "Parque Ibirapuera", loc: "São Paulo, Brazil", site: "https://www.google.com/maps/place/Parque+Ibirapuera+São+Paulo", photo: "http://i.amz.mshcdn.com/6RxzWaC87MGY1c4SzmHBgmGkkrM=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fibrapuera-park.jpg"},
    { name: "Parque del Buen Retiro", loc: "Madrid, Spain", site: "https://www.google.com/maps/place/El+Retiro+Park+Madrid+Spain", photo: "http://static.thousandwonders.net/Buen.Retiro.Park.original.16412.jpg"},
    { name: "Jardin du Luxembourg", loc: "Paris, France", site: "https://www.google.com/maps/place/Jardin+du+Luxembourg+Paris"}
  ],

  Nightlife:
  [
    { name: "Ibiza", loc: "Spain", site: "https://www.google.com/maps/place/Ibiza+Spain", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121148-nightlife-cities-1-ibiza-horizontal-large-gallery.jpg" }, 
    { name: "Berlin", loc: "Germany", site: "https://www.google.com/maps/place/Berlin+Germany", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "New York City", loc: "New York, USA", site: "https://www.google.com/maps/place/Gramercy+Theater+nyc", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140922182453-nightlife-cities-3-nyc-horizontal-large-gallery.jpg"},
    { name: "São Paulo", loc: "Brazil", site: "https://www.google.com/maps/place/Yacht+Club+São+Paulo+Brazil", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140923083417-party-cities-sao-paulo-horizontal-large-gallery.jpg"},
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/The+Mayflower+Pub+London+UK", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121713-nightlife-cities-5-london-horizontal-large-gallery.jpg"},
    { name: "Barcelona", loc: "Spain", site: "https://www.google.com/maps/place/Puerto+Olímpico+Barcelona", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121812-nightlife-cities-6-barcelona-horizontal-large-gallery.jpg"}, 
    { name: "Montreal", loc: "Canada", site: "https://www.google.com/maps/place/Downtown+Montreal+Canada", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121920-nightlife-cities-7-montreal-horizontal-large-gallery.jpg"},
    { name: "Las Vegas", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Las+Vegas+Strip", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"},
    { name: "Buenos Aires", loc: "Argentina", site: "https://www.google.com/maps/place/Palermo+Buenos+Aires+Argentina", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122152-nightlife-cities-9-buenos-aires-horizontal-large-gallery.jpg"},
    { name: "Bangkok", loc: "Thailand", site: "https://www.google.com/maps/place/Sofitel+So+Bangkok", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122416-nightlife-cities-10-bangkok-horizontal-large-gallery.jpg"}
  ],

  Shopping:
  [
    { name: "Tokyo", loc: "Japan", site: "https://www.google.com/maps/place/Shinjuku+Tokyo+Japan", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121148-nightlife-cities-1-ibiza-horizontal-large-gallery.jpg" }, 
    { name: "Berlin", loc: "Germany", site: "https://www.google.com/maps/place/Berlin+Germany", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "New York City", loc: "New York, USA", site: "https://www.google.com/maps/place/Fifth+avenue+nyc", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140922182453-nightlife-cities-3-nyc-horizontal-large-gallery.jpg"},
    { name: "Moscow", loc: "Russia", site: "https://www.google.com/maps/place/Moscow+Russia", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140923083417-party-cities-sao-paulo-horizontal-large-gallery.jpg"},
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/Oxford+Street+London+UK", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121713-nightlife-cities-5-london-horizontal-large-gallery.jpg"},
    { name: "Madrid", loc: "Spain", site: "https://www.google.com/maps/place/Madrid+Spain", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121812-nightlife-cities-6-barcelona-horizontal-large-gallery.jpg"}, 
    { name: "Milan", loc: "Italy", site: "https://www.google.com/maps/place/Milan+Italy", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121920-nightlife-cities-7-montreal-horizontal-large-gallery.jpg"},
    { name: "Dubai", loc: "United Arab Emirates", site: "https://www.google.com/maps/place/Dubai+Mall+uae", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"},
    { name: "Los Angeles", loc: "California, USA", site: "https://www.google.com/maps/place/Los+Angeles+Rodeo+Drive", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122152-nightlife-cities-9-buenos-aires-horizontal-large-gallery.jpg"},
    { name: "Paris", loc: "France", site: "https://www.google.com/maps/place/Champs-Élysées+Paris+France", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122416-nightlife-cities-10-bangkok-horizontal-large-gallery.jpg"}
  ],

  Skiing:
  [
    { name: "Banff National Park", loc: "Alberta, Canada", site: "https://www.google.com/maps/place/Banff+National+Park+Alberta", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/12/33/10/winter-hiking-at-johnston.jpg" }, 
    { name: "Lake Tahoe", loc: "California, USA", site: "https://www.google.com/maps/place/Lake+Tahoe+California", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "Whistler", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Whistler+British+Columbia", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/b0/3a/7c/whistler-village-in-the.jpg"},
    { name: "Interlaken", loc: "Canton of Bern, Switzerland", site: "https://www.google.com/maps/place/Interlaken+Switzerland", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/7f/40/8f/interlaken.jpg"},
    { name: "Zermatt", loc: "Swiss Alps, Switzerland", site: "https://www.google.com/maps/place/Zermatt+Switzerland", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/18/5b/3b/matterhorn-from-riffelsee.jpg"},
    { name: "Park City", loc: "Utah, USA", site: "https://www.google.com/maps/place/Park+City+Utah", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/55/3c/a7/powder-skiing-in-park.jpg"}, 
    { name: "Vail", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Vail+Colorado", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/46/77/9f/vail.jpg"},
    { name: "Anchorage", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Anchorage+Alaska", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/6e/97/5b/portage-glacier-is-the.jpg"},
    { name: "Breckenridge", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Breckenridge+Colorado", photo: "https://media-cdn.tripadvisor.com/media/vr-splice-j/03/27/94/1a.jpg"},
    { name: "Lake Placid", loc: "New York, USA", site: "https://www.google.com/maps/place/Lake+Placid+New+York", photo: "http://www.getawaymavens.com/wp-content/uploads/2013/03/Golden-Arrow-beach.jpg"}
  ],

  Surfing:
  [
    { name: "Tofino", loc: "Vancouver Island, Canada", site: "https://www.google.com/maps/place/Tofino+Vancouver+Island", photo: "http://cdn4.list25.com/wp-content/uploads/2013/01/Slide2517.jpg" }, 
    { name: "Les Cavaliers", loc: "Anglet, France", site: "https://www.google.com/maps/place/Les+Cavaliers+Anglet+France", photo: "http://cdn4.list25.com/wp-content/uploads/2013/01/Slide2417.jpg"}, 
    { name: "White Beach", loc: "Okinawa, Japan", site: "https://www.google.com/maps/place/White+Beach+Okinawa,Japan", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide2318.jpg"},
    { name: "Rincon Beach", loc: "Rincon, Puerto Rico", site: "https://www.google.com/maps/place/Rincon+Beach+Puerto+Rico", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide2218.jpg"},
    { name: "Watergate Bay", loc: "Cornwall, England", site: "https://www.google.com/maps/place/Watergate+Bay+Cornwall+England", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide2119.jpg"},
    { name: "Riyuewan", loc: "Hainan, China", site: "https://www.google.com/maps/place/Riyuewan+Hainan+China", photo: "http://www.ulanzhou.com/uploadfile/200901/20090115111329313.jpg"}, 
    { name: "Manu Bay", loc: "Raglan, New Zealand", site: "https://www.google.com/maps/place/Manu+Bay+Raglan+New+Zealand", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide1717.jpg"},
    { name: "Montañita Beach", loc: "Montañita, Ecuador", site: "https://www.google.com/maps/place/Montañita+Beach+Ecuador", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide1617.jpg"},
    { name: "Maninoa", loc: "Samoa", site: "https://www.google.com/maps/place/Maninoa+Samoa", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide1517.jpg"},
    { name: "Sultans", loc: "North Male, Maldives", site: "https://www.google.com/maps/place/Sultans+North+Male+Maldives", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide1417.jpg"}
  ],

  Kayaking:
  [
    { name: "Sea of Cortez", loc: "Baja California, Mexico", site: "https://www.google.com/maps/place/Baja+California+Mexico", photo: "https://www.theadventurejunkies.com/wp-content/uploads/IMG_4848-copy1.jpg?x63268" }, 
    { name: "Vancouver Island", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Vancouver+Island+British+Columbia", photo: "https://www.theadventurejunkies.com/wp-content/uploads/6066198925_98e10135b5_b.jpg?x63268"}, 
    { name: "Amazon Rainforest", loc: "Brazil", site: "https://www.google.com/maps/place/amazon+Rainforest+brazil", photo: "https://www.theadventurejunkies.com/wp-content/uploads/5902456057_8b1068f633_b.jpg?x63268"},
    { name: "Sermilik Fjord", loc: "Greenland", site: "https://www.google.com/maps/place/Sermilik+Greenland", photo: "https://www.theadventurejunkies.com/wp-content/uploads/3238944631_33ac4412f1_o.jpg?x63268"},
    { name: "Napali Coast", loc: "Kauai, Hawaii", site: "https://www.google.com/maps/place/NaPali+Kapaa+Hawaii", photo: "https://www.theadventurejunkies.com/wp-content/uploads/823975100_ba3241376b_b.jpg?x63268"},
    { name: "Fiordland", loc: "New Zealand", site: "https://www.google.com/maps/place/Fiordland+New+Zealand", photo: "https://www.theadventurejunkies.com/wp-content/uploads/109272937_00ecc8060a_b-1.jpg?x63268"}, 
    { name: "Dalmatian Coast", loc: "Croatia", site: "https://www.google.com/maps/place/Dalmatia+Croatia", photo: "https://www.theadventurejunkies.com/wp-content/uploads/10425622874_1e3333c80d_b.jpg?x63268"},
    { name: "Svalbard", loc: "Norway", site: "https://www.google.com/maps/place/Svalbard+Norway", photo: "https://www.theadventurejunkies.com/wp-content/uploads/15322342198_36ff971f3e_h.jpg?x63268"},
    { name: "The Andes", loc: "Patagonia, Chile", site: "https://www.google.com/maps/place/Patagonia+Chile", photo: "https://adventurejunkies-theadventurejunk.netdna-ssl.com/wp-content/uploads/419690025_e1769b16a6_o.jpg"},
    { name: "Glacier Bay", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Glacier+Bay+Alaska", photo: "https://www.theadventurejunkies.com/wp-content/uploads/9657169097_524f1a139b_k.jpg?x63268"}
  ],

}


*/

// var randomCountries = _.shuffle(countries);

// var places = [Arts, Beaches,Cycling, Birding, Business, Camping, Gambling, Golfing, Hiking, Parks, Nightlife, Shopping, Skiing, Surfing, Kayaking]

var arts = [
    { name: "Louvre Museum", loc: "Paris, France", site: "https://www.google.com/maps/place/Louvre+Museum", photo: "http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg"}, 
    { name: "Millennium Park", loc: "Chicago, USA", site: "https://www.google.com/maps/place/Millennium+Park+Chicago"}, 
    { name: "Goreme Open Air Museum", loc: "Goreme, Turkey", site: "https://www.google.com/maps/place/Goreme+Open+Air+Museum+Turkey"},
    { name: "Metropolitan Museum of Art", loc: "New York City, USA", site: "https://www.google.com/maps/place/Metropolitan+Museum+of+Art+New+York"},
    { name: "Rijksmuseum", loc: "Amsterdam, Netherlands", site: "https://www.google.com/maps/place/Rijksmuseum+Amsterdam"},
    { name: "Museo Reina Sofia", loc: "Madrid, Spain", site: "https://www.google.com/maps/place/Museo+Reina+Sofia+Madrid"}, 
    { name: "Santa Maria delle Grazie", loc: "Milan, Italy", site: "https://www.google.com/maps/place/Santa+Maria+delle+Grazie+Milan"},
    { name: "Storm King Art Center", loc: "New York State, USA", site: "https://www.google.com/maps/place/Storm+King+Art+Center+New+York"},
    { name: "Lakshman Temple", loc: "Khajuraho, India", site: "https://www.google.com/maps/place/Lakshman+Temple+India"},
    { name: "Museo Nacional de Antropologia", loc: "Mexico City, Mexico", site: "https://www.google.com/maps/place/Museo+Nacional+de+Antropologia+Mexico"}
  ] 

var beaches =  [
    { name: "Punta Cana", loc: "Punta Cana, Dominican Republic", site: "https://www.google.com/maps/place/punta+cana" }, 
    { name: "Playa Flamenco", loc: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico"}, 
    { name: "Playa del Carmen", loc: "Yucatan, Mexico", site: "https://www.google.com/maps/place/Playa+del+Carmen+Mexico"},
    { name: "Maui Beach", loc: "Hawaii, USA", site: "https://www.google.com/maps/place/Maui+Hawaii"},
    { name: "South Beach", loc: "Miami, USA", site: "https://www.google.com/maps/place/South+Beach+Miami"},
    { name: "Nai Harn Beach", loc: "Phuket Island, Thailand", site: "https://www.google.com/maps/place/Coronado+Beach+San+Diego"}, 
    { name: "Coronado Beach", loc: "San Diego, USA", site: "https://www.google.com/maps/place/Santa+Maria+delle+Grazie+Milan"},
    { name: "Bondi Beach", loc: "Sydney, Australia", site: "https://www.google.com/maps/place/Bondi+Beach+Sydney+Australia"},
    { name: "Bora Bora", loc: "French Polynesia", site: "https://www.google.com/maps/place/bora+bora"},
    { name: "Palm Beach", loc: "Aruba", site: "https://www.google.com/maps/place/palm+beach+aruba"}
  ]

var cycling = [
    { name: "Serra da Estrela Mountains", loc: "Covilhã, Portugal", site: "https://www.google.com/maps/place/Serra+da+Estrela+Covilhã+Portugal", }, 
    { name: "Lake Song-Kol", loc: "Kochkor, Kyrgyzstan", site: "https://www.google.com/maps/place/Lake+Song-Kol+Kyrgyzstan"}, 
    { name: "Mekong River", loc: "Phnom Penh, Cambodia", site: "https://www.google.com/maps/place/Mekong+River+Phnom+Penh+Cambodia"},
    { name: "Tasmania Island", loc: "Australia", site: "https://www.google.com/maps/place/Tasmania+Island+Australia"},
    { name: "Route 395", loc: "Oregon Coast, USA", site: "https://www.google.com/maps/place/Brookings+Oregon"},
    { name: "The Dolomites", loc: "Bolzano, Italy", site: "https://www.google.com/maps/place/The+Dolomites+Italy"}, 
    { name: "Shiraz to Yazd", loc: "Iran", site: "https://www.google.com/maps/place/Shiraz+Iran"},
    { name: "Zagora to Tafraoute", loc: "Morocco", site: "https://www.google.com/maps/place/Zagora+Morocco"},
    { name: "Molesworth Road", loc: "Molesworth, New Zealand", site: "https://www.google.com/maps/place/Molesworth+New+Zealand"},
    { name: "Turkey Interior", loc: "Bergama, Turkey", site: "https://www.google.com/maps/place/Bergama+Turkey"}
  ]

var birding = [
    { name: "Manu National Park", loc: "Manu, Peru", site: "https://www.google.com/maps/place/Manu+National+Park+Peru", }, 
    { name: "Cape May", loc: "New Jersey, USA", site: "https://www.google.com/maps/place/Cape+May+Birding+New+Jersey"}, 
    { name: "Kruger National Park", loc: "Kruger, South Africa", site: "https://www.google.com/maps/place/Kruger+National+Park+South+Africa"},
    { name: "Tandayapa Bird Lodge", loc: "Quito, Ecuador", site: "https://www.google.com/maps/place/Tandayapa+Bird+Lodge+Ecuador"},
    { name: "Coto Doñana National Park", loc: "Almonte, Spain", site: "https://www.google.com/maps/place/Coto+Doñana+Almonte+Spain"},
    { name: "Kalimantan", loc: "Borneo, Malaysia", site: "https://www.google.com/maps/place/Borneo+Birding+malaysia"}, 
    { name: "Rondon Ridge", loc: "Mount Hagen, Papua New Guinea", site: "https://www.google.com/maps/place/Mount+Hagen+Papua+New+Guinea"},
    { name: "Atherton Tablelands", loc: "Cairns, Australia", site: "https://www.google.com/maps/place/Cairns+Australia"},
    { name: "Panama Canal", loc: "Panama City, Panama", site: "https://www.google.com/maps/place/Canopy+Tower+Panama"},
    { name: "Jigme Dorji", loc: "Thimphu, Bhutan", site: "https://www.google.com/maps/place/Jigme+Dorji+Bhutan"}
  ]

var business = [
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/london+uk", }, 
    { name: "Sydney", loc: "Australia", site: "https://www.google.com/maps/place/sydney+australia"}, 
    { name: "Toronto", loc: "Canada", site: "https://www.google.com/maps/place/toronto+canada"},
    { name: "Hong Kong", loc: "China", site: "https://www.google.com/maps/place/hong+kong+china"},
    { name: "Mexico City", loc: "Mexico", site: "https://www.google.com/maps/place/Mexico+loc"},
    { name: "Madrid", loc: "Spain", site: "https://www.google.com/maps/place/Madrid+Spain"}, 
    { name: "New York City", loc: "USA", site: "https://www.google.com/maps/place/new+york+loc"},
    { name: "Chicago", loc: "USA", site: "https://www.google.com/maps/place/Chicago+Illinois"},
    { name: "Washington, DC", loc: "USA", site: "https://www.google.com/maps/place/Washington+DC"},
    { name: "Rio de Janeiro", loc: "Brazil", site: "https://www.google.com/maps/place/Rio+de+Janeiro"}
  ]

var camping = [
    { name: "Yosemite National Park", loc: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park" }, 
    { name: "Boya Lake Provincial Park", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Boya+Lake+Provincial+Park+British+Columbia+Canada"}, 
    { name: "Miyajima Island", loc: "Miyajima, Japan", site: "https://www.google.com/maps/place/Miyajima+Island+Japan"},
    { name: "The Isle of Arran", loc: "Arran, Scotland", site: "https://www.google.com/maps/place/The+Isle+of+Arran+Scotland"},
    { name: "Playa Flamenco", loc: "Culebra, Puerto Rico", site: "https://www.google.com/maps/place/Bahia+Flamenco+puerto+rico"},
    { name: "Corcovado National Park", loc: "Playa Caletas de Osa, Costa Rica", site: "https://www.google.com/maps/place/Corcovado+National+Park+Costa+Rica"}, 
    { name: "Sahara Desert", loc: "Ouarzazate, Morocco", site: "https://www.google.com/maps/place/sahara+desert+morocco"},
    { name: "Yellowstone National Park", loc: "Wyoming, USA", site: "https://www.google.com/maps/place/Yellowstone+National+Park"},
    { name: "Lake Myvatn", loc: "Reykjahlid, Iceland", site: "https://www.google.com/maps/place/Lake+Myvatn+Iceland"},
    { name: "Grand Canyon", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon"}
  ]

var gambling = [
    { name: "Niagara Falls", loc: "Niagara Falls, USA / Canada", site: "https://www.google.com/maps/place/Niagara+Falls", }, 
    { name: "Downtown Nassau", loc: "Nassau, Bahamas", site: "https://www.google.com/maps/place/Downtown+Nassau+Bahamas"}, 
    { name: "Palm Beach", loc: "Noord, Aruba", site: "https://www.google.com/maps/place/Palm+Beach+Smith+Blvd+Noord+Aruba"},
    { name: "Condado", loc: "San Juan, Puerto Rico", site: "https://www.google.com/maps/place/condado+san+juan+puerto+rico"},
    { name: "Reno", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Casinos+in+Reno+Nevada"},
    { name: "Monte Carlo", loc: "Monte Carlo, Monaco", site: "https://www.google.com/maps/place/Casinos+In+Monte+carlo+Monaco"}, 
    { name: "Southeast Connecticut", loc: "Connecticut, USA", site: "https://www.google.com/maps/place/1+Mohegan+Sun+Blvd,+Uncasville,+CT+06382"},
    { name: "Atlantic City", loc: "New Jersey, USA", site: "https://www.google.com/maps/place/Atlantic+City+New+Jersey"},
    { name: "Macau", loc: "Macau, China", site: "https://www.google.com/maps/place/Macau+China"},
    { name: "Las Vegas", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Las+Vegas+Strip", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"}
  ]

var golfing = [
    { name: "Playa Grande", loc: "Cabrera, Dominican Republic", site: "https://www.google.com/maps/place/Playa+Grande+Dominican+Republic", }, 
    { name: "Hazeltine National Golf Club", loc: "Minnesota, USA", site: "https://www.google.com/maps/place/Hazeltine+Golf+Chaska+Minnesota"}, 
    { name: "Maderas Golf Club", loc: "California, USA", site: "https://www.google.com/maps/place/Maderas+Golf+Poway+California"},
    { name: "Austin Country Club", loc: "Texas, USA", site: "https://www.google.com/maps/place/4408+Long+Champ+Dr,+Austin,+TX+78746"},
    { name: "TPC Harding Park", loc: "California, USA", site: "https://www.google.com/maps/place/TPC+Harding+Park+San+Francisco"},
    { name: "Turtle Point", loc: "South Carolina, USA", site: "https://www.google.com/maps/place/Turtle+Point+Kiawah+Island"}, 
    { name: "West at Gull Lake View Golf Club", loc: "Michigan, USA", site: "https://www.google.com/maps/place/Gull+Golf+Augusta+Michigan"},
    { name: "Wickenburg Ranch Golf Course", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Wickenburg+Ranch+Golf"},
    { name: "Cape Breton Island", loc: "Nova Scotia, Canada", site: "https://www.google.com/maps/place/Cape+Breton+Island"},
    { name: "Royal Troon Golf Club", loc: "Troon, Scotland", site: "https://www.google.com/maps/place/Craigend+Rd,+Troon+KA10+6EP,+UK"}
  ]

var hiking = [
    { name: "Abisko National Park", loc: "Abisko, Sweden", site: "https://www.google.com/maps/place/Abisko+National+Park", }, 
    { name: "Grand Canyon", loc: "Arizona, USA", site: "https://www.google.com/maps/place/Grand+Canyon"}, 
    { name: "Mount Everest", loc: "Sagarmatha, Nepal", site: "https://www.google.com/maps/place/Mount+Everest"},
    { name: "Monte Fitz Roy", loc: "Patagonia, Argentina", site: "https://www.google.com/maps/place/Monte+Fitz+Roy"},
    { name: "Dana Reserve", loc: "Dana, Jordan", site: "https://www.google.com/maps/place/Dana+Reserve+Jordan"},
    { name: "Bernese Alps", loc: "Grindelwald, Switzerland", site: "https://www.google.com/maps/place/Bernese+Alps+Switzerland"}, 
    { name: "Yosemite National Park", loc: "California, USA", site: "https://www.google.com/maps/place/Yosemite+National+Park"},
    { name: "Chilkoot Trail", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Chilkoot+Trail+Skagway+Alaska"},
    { name: "Queen Charlotte Track", loc: "Marlborough Sounds, New Zealand", site: "https://www.google.com/maps/place/Marlborough+Sounds+New+Zealand"},
    { name: "Mountains of the Moon", loc: "Rwenzori, Uganda", site: "https://www.google.com/maps/place/Rwenzori+Mountains+Uganda"}
  ]

var parks = [
    { name: "Stanley Park", loc: "Vancouver, Canada", site: "https://www.google.com/maps/place/Stanley+Park+Vancouver", photo: "http://i.amz.mshcdn.com/YuIyXsRIpB_6A4N5UkBp4geMr94=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fstanley-park.jpg" }, 
    { name: "Garden of the Gods", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Garden+of+the+Gods+Colorado+Springs", photo: "http://i.amz.mshcdn.com/10r0e3Z62EnX0afR-6fUCAElc1o=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fgarden-of-the-gods.jpg"}, 
    { name: "Central Park", loc: "New York, USA", site: "https://www.google.com/maps/place/Central+Park+nyc", photo: "http://i.amz.mshcdn.com/0UBK9CvlCEDVdhzeFnlVIvmm4Mo=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fcentral-park.jpg"},
    { name: "Millenium Park", loc: "Chicago, USA", site: "https://www.google.com/maps/place/Millenium+Park+Chicago", photo: "http://i.amz.mshcdn.com/0aug5PS6V5iLiCNsWihzef7K52w=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fmillenium-park.jpg"},
    { name: "The High Line", loc: "New York, USA", site: "https://www.google.com/maps/place/The+High+Line+New+York", photo: "http://i.amz.mshcdn.com/O92Sa1bpuM3wxuTFd2gWtg7LVfI=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fthe-high-line.jpg"},
    { name: "Kings Park and Botanical Garden", loc: "Perth, Australia", site: "https://www.google.com/maps/place/Kings+Park+Perth+Australia"}, 
    { name: "Park Güell", loc: "Barcelona, Spain", site: "https://www.google.com/maps/place/Park+Güell+Barcelona", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Park_G%C3%BCell_02.jpg/330px-Park_G%C3%BCell_02.jpg"},
    { name: "Parque Ibirapuera", loc: "São Paulo, Brazil", site: "https://www.google.com/maps/place/Parque+Ibirapuera+São+Paulo", photo: "http://i.amz.mshcdn.com/6RxzWaC87MGY1c4SzmHBgmGkkrM=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fworlds-top-10-parks%2Fibrapuera-park.jpg"},
    { name: "Parque del Buen Retiro", loc: "Madrid, Spain", site: "https://www.google.com/maps/place/El+Retiro+Park+Madrid+Spain", photo: "http://static.thousandwonders.net/Buen.Retiro.Park.original.16412.jpg"},
    { name: "Jardin du Luxembourg", loc: "Paris, France", site: "https://www.google.com/maps/place/Jardin+du+Luxembourg+Paris"}
  ]

var nightlife = [
    { name: "Ibiza", loc: "Spain", site: "https://www.google.com/maps/place/Ibiza+Spain", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121148-nightlife-cities-1-ibiza-horizontal-large-gallery.jpg" }, 
    { name: "Berlin", loc: "Germany", site: "https://www.google.com/maps/place/Berlin+Germany", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "New York City", loc: "New York, USA", site: "https://www.google.com/maps/place/Gramercy+Theater+nyc", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140922182453-nightlife-cities-3-nyc-horizontal-large-gallery.jpg"},
    { name: "São Paulo", loc: "Brazil", site: "https://www.google.com/maps/place/Yacht+Club+São+Paulo+Brazil", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140923083417-party-cities-sao-paulo-horizontal-large-gallery.jpg"},
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/The+Mayflower+Pub+London+UK", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121713-nightlife-cities-5-london-horizontal-large-gallery.jpg"},
    { name: "Barcelona", loc: "Spain", site: "https://www.google.com/maps/place/Puerto+Olímpico+Barcelona", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121812-nightlife-cities-6-barcelona-horizontal-large-gallery.jpg"}, 
    { name: "Montreal", loc: "Canada", site: "https://www.google.com/maps/place/Downtown+Montreal+Canada", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121920-nightlife-cities-7-montreal-horizontal-large-gallery.jpg"},
    { name: "Las Vegas", loc: "Nevada, USA", site: "https://www.google.com/maps/place/Las+Vegas+Strip", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"},
    { name: "Buenos Aires", loc: "Argentina", site: "https://www.google.com/maps/place/Palermo+Buenos+Aires+Argentina", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122152-nightlife-cities-9-buenos-aires-horizontal-large-gallery.jpg"},
    { name: "Bangkok", loc: "Thailand", site: "https://www.google.com/maps/place/Sofitel+So+Bangkok", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122416-nightlife-cities-10-bangkok-horizontal-large-gallery.jpg"}
  ]

var shopping = [
    { name: "Tokyo", loc: "Japan", site: "https://www.google.com/maps/place/Shinjuku+Tokyo+Japan", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121148-nightlife-cities-1-ibiza-horizontal-large-gallery.jpg" }, 
    { name: "Berlin", loc: "Germany", site: "https://www.google.com/maps/place/Berlin+Germany", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "New York City", loc: "New York, USA", site: "https://www.google.com/maps/place/Fifth+avenue+nyc", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140922182453-nightlife-cities-3-nyc-horizontal-large-gallery.jpg"},
    { name: "Moscow", loc: "Russia", site: "https://www.google.com/maps/place/Moscow+Russia", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140923083417-party-cities-sao-paulo-horizontal-large-gallery.jpg"},
    { name: "London", loc: "United Kingdom", site: "https://www.google.com/maps/place/Oxford+Street+London+UK", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121713-nightlife-cities-5-london-horizontal-large-gallery.jpg"},
    { name: "Madrid", loc: "Spain", site: "https://www.google.com/maps/place/Madrid+Spain", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121812-nightlife-cities-6-barcelona-horizontal-large-gallery.jpg"}, 
    { name: "Milan", loc: "Italy", site: "https://www.google.com/maps/place/Milan+Italy", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121920-nightlife-cities-7-montreal-horizontal-large-gallery.jpg"},
    { name: "Dubai", loc: "United Arab Emirates", site: "https://www.google.com/maps/place/Dubai+Mall+uae", photo: "https://static.panoramio.com.storage.googleapis.com/photos/large/118600455.jpg"},
    { name: "Los Angeles", loc: "California, USA", site: "https://www.google.com/maps/place/Los+Angeles+Rodeo+Drive", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122152-nightlife-cities-9-buenos-aires-horizontal-large-gallery.jpg"},
    { name: "Paris", loc: "France", site: "https://www.google.com/maps/place/Champs-Élysées+Paris+France", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801122416-nightlife-cities-10-bangkok-horizontal-large-gallery.jpg"}
  ]


var skiing = [
    { name: "Banff National Park", loc: "Alberta, Canada", site: "https://www.google.com/maps/place/Banff+National+Park+Alberta", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/12/33/10/winter-hiking-at-johnston.jpg" }, 
    { name: "Lake Tahoe", loc: "California, USA", site: "https://www.google.com/maps/place/Lake+Tahoe+California", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/140801121303-nightlife-cities-2-berlin-horizontal-large-gallery.jpg"}, 
    { name: "Whistler", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Whistler+British+Columbia", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/b0/3a/7c/whistler-village-in-the.jpg"},
    { name: "Interlaken", loc: "Canton of Bern, Switzerland", site: "https://www.google.com/maps/place/Interlaken+Switzerland", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/7f/40/8f/interlaken.jpg"},
    { name: "Zermatt", loc: "Swiss Alps, Switzerland", site: "https://www.google.com/maps/place/Zermatt+Switzerland", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/18/5b/3b/matterhorn-from-riffelsee.jpg"},
    { name: "Park City", loc: "Utah, USA", site: "https://www.google.com/maps/place/Park+City+Utah", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/55/3c/a7/powder-skiing-in-park.jpg"}, 
    { name: "Vail", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Vail+Colorado", photo: "https://media-cdn.tripadvisor.com/media/photo-s/01/46/77/9f/vail.jpg"},
    { name: "Anchorage", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Anchorage+Alaska", photo: "https://media-cdn.tripadvisor.com/media/photo-s/0d/6e/97/5b/portage-glacier-is-the.jpg"},
    { name: "Breckenridge", loc: "Colorado, USA", site: "https://www.google.com/maps/place/Breckenridge+Colorado", photo: "https://media-cdn.tripadvisor.com/media/vr-splice-j/03/27/94/1a.jpg"},
    { name: "Lake Placid", loc: "New York, USA", site: "https://www.google.com/maps/place/Lake+Placid+New+York", photo: "http://www.getawaymavens.com/wp-content/uploads/2013/03/Golden-Arrow-beach.jpg"}
  ]

var surfing = [
    { name: "Tofino", loc: "Vancouver Island, Canada", site: "https://www.google.com/maps/place/Tofino+Vancouver+Island", photo: "http://cdn4.list25.com/wp-content/uploads/2013/01/Slide2517.jpg" }, 
    { name: "Les Cavaliers", loc: "Anglet, France", site: "https://www.google.com/maps/place/Les+Cavaliers+Anglet+France", photo: "http://cdn4.list25.com/wp-content/uploads/2013/01/Slide2417.jpg"}, 
    { name: "White Beach", loc: "Okinawa, Japan", site: "https://www.google.com/maps/place/White+Beach+Okinawa,Japan", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide2318.jpg"},
    { name: "Rincon Beach", loc: "Rincon, Puerto Rico", site: "https://www.google.com/maps/place/Rincon+Beach+Puerto+Rico", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide2218.jpg"},
    { name: "Watergate Bay", loc: "Cornwall, England", site: "https://www.google.com/maps/place/Watergate+Bay+Cornwall+England", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide2119.jpg"},
    { name: "Riyuewan", loc: "Hainan, China", site: "https://www.google.com/maps/place/Riyuewan+Hainan+China", photo: "http://www.ulanzhou.com/uploadfile/200901/20090115111329313.jpg"}, 
    { name: "Manu Bay", loc: "Raglan, New Zealand", site: "https://www.google.com/maps/place/Manu+Bay+Raglan+New+Zealand", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide1717.jpg"},
    { name: "Montañita Beach", loc: "Montañita, Ecuador", site: "https://www.google.com/maps/place/Montañita+Beach+Ecuador", photo: "http://cdn2.list25.com/wp-content/uploads/2013/01/Slide1617.jpg"},
    { name: "Maninoa", loc: "Samoa", site: "https://www.google.com/maps/place/Maninoa+Samoa", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide1517.jpg"},
    { name: "Sultans", loc: "North Male, Maldives", site: "https://www.google.com/maps/place/Sultans+North+Male+Maldives", photo: "http://cdn.list25.com/wp-content/uploads/2013/01/Slide1417.jpg"}
  ]


var kayaking = [ 
    { name: "Sea of Cortez", loc: "Baja California, Mexico", site: "https://www.google.com/maps/place/Baja+California+Mexico", photo: "https://www.theadventurejunkies.com/wp-content/uploads/IMG_4848-copy1.jpg?x63268" }, 
    { name: "Vancouver Island", loc: "British Columbia, Canada", site: "https://www.google.com/maps/place/Vancouver+Island+British+Columbia", photo: "https://www.theadventurejunkies.com/wp-content/uploads/6066198925_98e10135b5_b.jpg?x63268"}, 
    { name: "Amazon Rainforest", loc: "Brazil", site: "https://www.google.com/maps/place/amazon+Rainforest+brazil", photo: "https://www.theadventurejunkies.com/wp-content/uploads/5902456057_8b1068f633_b.jpg?x63268"},
    { name: "Sermilik Fjord", loc: "Greenland", site: "https://www.google.com/maps/place/Sermilik+Greenland", photo: "https://www.theadventurejunkies.com/wp-content/uploads/3238944631_33ac4412f1_o.jpg?x63268"},
    { name: "Napali Coast", loc: "Kauai, Hawaii", site: "https://www.google.com/maps/place/NaPali+Kapaa+Hawaii", photo: "https://www.theadventurejunkies.com/wp-content/uploads/823975100_ba3241376b_b.jpg?x63268"},
    { name: "Fiordland", loc: "New Zealand", site: "https://www.google.com/maps/place/Fiordland+New+Zealand", photo: "https://www.theadventurejunkies.com/wp-content/uploads/109272937_00ecc8060a_b-1.jpg?x63268"}, 
    { name: "Dalmatian Coast", loc: "Croatia", site: "https://www.google.com/maps/place/Dalmatia+Croatia", photo: "https://www.theadventurejunkies.com/wp-content/uploads/10425622874_1e3333c80d_b.jpg?x63268"},
    { name: "Svalbard", loc: "Norway", site: "https://www.google.com/maps/place/Svalbard+Norway", photo: "https://www.theadventurejunkies.com/wp-content/uploads/15322342198_36ff971f3e_h.jpg?x63268"},
    { name: "The Andes", loc: "Patagonia, Chile", site: "https://www.google.com/maps/place/Patagonia+Chile", photo: "https://adventurejunkies-theadventurejunk.netdna-ssl.com/wp-content/uploads/419690025_e1769b16a6_o.jpg"},
    { name: "Glacier Bay", loc: "Alaska, USA", site: "https://www.google.com/maps/place/Glacier+Bay+Alaska", photo: "https://www.theadventurejunkies.com/wp-content/uploads/9657169097_524f1a139b_k.jpg?x63268"}
  ]

class Discover extends React.Component {
  render() {
    return (
      <div>
        <h2> Discover </h2>
        <Arts/>
        <Beaches />
        <Birding/>
        <Business/>
        <Camping/>
        <Cycling/>
        <Gambling/>
        <Golfing/>
        <Hiking/>
        <Kayaking/>
        <Nightlife/>
        <Parks/>
        <Shopping/>
      </div>
    )
  }
}


class Arts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': []
                 };
    
  }
  componentWillMount(){
    var randomArts = _.shuffle(arts);
      this.setState({ 
          'name': [randomArts[0].name, randomArts[1].name, randomArts[2].name],
          'loc': [randomArts[0].loc, randomArts[1].loc, randomArts[2].loc],
          'site': [randomArts[0].site, randomArts[1].site, randomArts[2].site]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Arts </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



class Beaches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': []
                 };
    
  }
  componentWillMount(){
    var randomBeaches = _.shuffle(beaches);
      this.setState({ 
          'name': [randomBeaches[0].name, randomBeaches[1].name, randomBeaches[2].name],
          'loc': [randomBeaches[0].loc, randomBeaches[1].loc, randomBeaches[2].loc],
          'site': [randomBeaches[0].site, randomBeaches[1].site, randomBeaches[2].site]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Beaches </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



class Cycling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': []
                 };
    
  }
  componentWillMount(){
    var randomCycling = _.shuffle(cycling);
      this.setState({ 
          'name': [randomCycling[0].name, randomCycling[1].name, randomCycling[2].name],
          'loc': [randomCycling[0].loc, randomCycling[1].loc, randomCycling[2].loc],
          'site': [randomCycling[0].site, randomCycling[1].site, randomCycling[2].site]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Cycling </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src="http://traveldigg.com/wp-content/uploads/2016/06/Louvre-Museum-Pictures-720x404.jpg" alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Birding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomBirding = _.shuffle(birding);
      this.setState({ 
          'name': [randomBirding[0].name, randomBirding[1].name, randomBirding[2].name],
          'loc': [randomBirding[0].loc, randomBirding[1].loc, randomBirding[2].loc],
          'site': [randomBirding[0].site, randomBirding[1].site, randomBirding[2].site],
          'photo': [randomBirding[0].photo, randomBirding[1].photo, randomBirding[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Birding </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomBusiness = _.shuffle(business);
      this.setState({ 
          'name': [randomBusiness[0].name, randomBusiness[1].name, randomBusiness[2].name],
          'loc': [randomBusiness[0].loc, randomBusiness[1].loc, randomBusiness[2].loc],
          'site': [randomBusiness[0].site, randomBusiness[1].site, randomBusiness[2].site],
          'photo': [randomBusiness[0].photo, randomBusiness[1].photo, randomBusiness[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Business </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Camping extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomCamping = _.shuffle(camping);
      this.setState({ 
          'name': [randomCamping[0].name, randomCamping[1].name, randomCamping[2].name],
          'loc': [randomCamping[0].loc, randomCamping[1].loc, randomCamping[2].loc],
          'site': [randomCamping[0].site, randomCamping[1].site, randomCamping[2].site],
          'photo': [randomCamping[0].photo, randomCamping[1].photo, randomCamping[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Camping </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Gambling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(gambling);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Gambling </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Golfing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(golfing);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Golfing </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Hiking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(hiking);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Hiking </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Parks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(parks);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Parks </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Nightlife extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(nightlife);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Nightlife </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Kayaking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomKayaking = _.shuffle(kayaking);
      this.setState({ 
          'name': [randomKayaking[0].name, randomKayaking[1].name, randomKayaking[2].name],
          'loc': [randomKayaking[0].loc, randomKayaking[1].loc, randomKayaking[2].loc],
          'site': [randomKayaking[0].site, randomKayaking[1].site, randomKayaking[2].site],
          'photo': [randomKayaking[0].photo, randomKayaking[1].photo, randomKayaking[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Kayaking </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}






class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'name': [],
                   'loc': [], 
                   'site': [],
                   'photo' : []
                 };
    
  }
  componentWillMount(){
    var randomGambling = _.shuffle(shopping);
      this.setState({ 
          'name': [randomGambling[0].name, randomGambling[1].name, randomGambling[2].name],
          'loc': [randomGambling[0].loc, randomGambling[1].loc, randomGambling[2].loc],
          'site': [randomGambling[0].site, randomGambling[1].site, randomGambling[2].site],
          'photo': [randomGambling[0].photo, randomGambling[1].photo, randomGambling[2].photo]
      });
  }
  render() {
    
    return (
      <div>
        <h3> Nightlife </h3>
        <div className="row">
          <div className="col-md-4">
          <a href = {this.state.site[0]}><img className="card-img-top" src= {this.state.photo[0]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[0]}</h3> 
              <p className="card-text">{this.state.loc[0]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[1]}><img className="card-img-top" src={this.state.photo[1]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[1]}</h3> 
              <p className="card-text">{this.state.loc[1]}</p>
            </div>
          </div>
          <div className="col-md-4">
          <a href = {this.state.site[2]}><img className="card-img-top" src={this.state.photo[2]} alt="Card image cap"/></a>
            <div className="card card-block">
              <h3 className="card-title">{this.state.name[2]}</h3> 
              <p className="card-text">{this.state.loc[2]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {arts};
export default Discover;

