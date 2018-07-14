import React, { Component } from 'react';
import './App.css';
import Soldier from './components/Solider';
import {groupBy} from 'lodash'

/* eslint import/no-webpack-loader-syntax: off */
import FirstNamesText from '!raw-loader!./data/firstNames.txt';
import LastNamesText from '!raw-loader!./data/lastNames.txt';
import CitiesText from '!raw-loader!./data/cities.txt';
import EyeColorText from '!raw-loader!./data/eyes.txt';
import HairColorText from '!raw-loader!./data/hair.txt';
import StreetSuffixes from '!raw-loader!./data/streetSuffixes.txt'

import Random from 'random-js';
const random = Random();

class App extends Component {
  firstNames = FirstNamesText.split('\n');
  lastNames = LastNamesText.split('\n');
  cities = CitiesText.split('\n');
  citiesByState = groupBy(this.cities, (c) => c.split(',')[1])
  eyes = EyeColorText.split('\n');
  hair = HairColorText.split('\n');
  streetSuffixes = StreetSuffixes.split('\n');

  soldiers = [];

  constructor() {
    super();
    this.soldier = this.createSoldier(random.integer(1000000, 99999999));
  }

  createSoldier(id) {
    const firstName = random.pick(this.firstNames);
    const lastName = random.pick(this.lastNames);
    const middleInitial = String.fromCharCode(random.integer(65, 90));
    const birthdate = `${random.integer(1,12)}/${random.integer(1,30)}/${random.integer(1912,1922)}`;
    const birthplace = random.pick(this.cities);
    const eyecolor = random.pick(this.eyes);
    const haircolor = random.pick(this.hair);
    const weight = random.integer(140, 210);
    const height = random.integer(5*12, 6*12+4);
    const streetAddress = `${random.integer(1,5000)} ${random.pick(this.lastNames)} ${random.pick(this.streetSuffixes)}`
    const state = birthplace.split(',')[1]
    let addressCityState = random.pick(this.citiesByState[state])
    if (random.integer(0, 100) < 40) {
      addressCityState = birthplace;
    } else if (random.integer(0, 100) < 20) {
      addressCityState = random.pick(this.cities)
    }
    return { id, firstName, lastName, middleInitial, birthdate, birthplace, eyecolor, haircolor, weight, height, streetAddress, addressCityState }
  }

  render() {
    return (
      <div className="paper">
        <h1>Military Service Record</h1>
        <Soldier soldier={this.soldier}/>
      </div>
    );
  }
}

export default App;
