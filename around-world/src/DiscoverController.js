import React from 'react';
import { Link, hashHistory } from 'react-router';
import _ from 'lodash';

var array = [1,2,3,4];

var newArray = _.shuffle(array);

console.log(newArray);


var interests = ['Arts', 'Beaches', 'Biking', 'Birding', 
                'Business', 'Camping', 'Casinos', 'Cycling', 'Diving', 
                'Golf', 'Hiking', 'Parks', 'Nightlife', 'Shopping', 
                'Skiing', 'Surfing', 'Kayaking', 'Racing', 'Running', 
                'Sky+Diving', 'Restaurants', 'Amusement+parks', 'Fishing',
                'Bowling', 'Horseriding']


var discoverEndpoint = 'https://api.theprintful.com/countries';

var countries = ["Afghanistan", "Albania", "Algeria", "American+Samoa", "Andorra", "Angola", "Anguilla", "Antigua+and+Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia+and+Herzegovina", "Botswana", "Brazil", "Bulgaria", "Burkina+Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape+Verde", "Cayman+Islands", "Central+African+Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook+Islands", "Costa+Rica", "Cote+d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech+Republic", "Denmark", "Djibouti", "Dominica", "Dominican+Republic", "East+Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial+Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland+Islands", "Faroe+Islands", "Fiji", "Finland", "France", "French+Guiana", "French+Polynesia", "Gabon", "Gambia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong+Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kyrgyzstan", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall+Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New+Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk+Island", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua+New+Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto+Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint+Kitts+and+Nevis", "Saint+Lucia", "Grenadines", "Samoa", "Saudi+Arabia", "Senegal", "Seychelles", "Sierra+Leone", "Singapore", "Slovakia", "Slovenia", "Solomon+Islands", "Somalia", "South+Africa", "Spain", "Sri+Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad+and+Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
