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