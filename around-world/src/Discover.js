import React from 'react';
import { Link, hashHistory } from 'react-router';
import './A_D_E.css'
import _ from 'lodash';


var interests = ['Arts', 'Beaches', 'Biking', 'Birding', 
                'Business', 'Camping', 'Casinos', 'Cycling', 'Diving', 
                'Golf', 'Hiking', 'Parks', 'Nightlife', 'Shopping', 
                'Skiing', 'Surfing', 'Kayaking', 'Racing', 'Running', 
                'Sky+Diving', 'Restaurants', 'Amusement+parks', 'Fishing',
                'Bowling', 'Horseriding']


var discoverEndpoint = 'https://api.theprintful.com/countries';

var countries = ["Afghanistan", "Albania", "Algeria", "American+Samoa", "Andorra", "Angola", "Anguilla", "Antigua+and+Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia+and+Herzegovina", "Botswana", "Brazil", "Bulgaria", "Burkina+Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape+Verde", "Cayman+Islands", "Central+African+Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook+Islands", "Costa+Rica", "Cote+d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech+Republic", "Denmark", "Djibouti", "Dominica", "Dominican+Republic", "East+Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial+Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland+Islands", "Faroe+Islands", "Fiji", "Finland", "France", "French+Guiana", "French+Polynesia", "Gabon", "Gambia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong+Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kyrgyzstan", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall+Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New+Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk+Island", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua+New+Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto+Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint+Kitts+and+Nevis", "Saint+Lucia", "Grenadines", "Samoa", "Saudi+Arabia", "Senegal", "Seychelles", "Sierra+Leone", "Singapore", "Slovakia", "Slovenia", "Solomon+Islands", "Somalia", "South+Africa", "Spain", "Sri+Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad+and+Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]


var randomInterests = _.shuffle(interests);

console.log(randomInterests);

var top5RandomInterests = randomInterests.splice(5);

console.log(top5RandomInterests);
// Splice 

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
      <h2>This is the Discover page</h2>
      <div id ="contentContainer">
        <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
      </div>
    );
  }
}

export default Discover;