import React, { Component } from 'react';
import {Soldier} from '../components';
import {groupBy} from 'lodash';
import weightedRandom from 'weighted-random';
import {randomNormal} from 'd3-random';
import {Container} from 'semantic-ui-react'

/* eslint import/no-webpack-loader-syntax: off */
import FirstNamesText from '!raw-loader!../data/firstNames.txt';
import LastNamesText from '!raw-loader!../data/lastNames.txt';
import CitiesText from '!raw-loader!../data/cities.txt';
import EyeColors from '../data/eyes.json';
import HairColors from '../data/hair.json';
import StreetSuffixes from '!raw-loader!../data/streetSuffixes.txt'

import Random from 'random-js';
const random = Random();

export default class Generator extends Component {
  firstNames = FirstNamesText.split('\n');
  lastNames = LastNamesText.split('\n');
  cities = CitiesText.split('\n');
  citiesByState = groupBy(this.cities, (c) => c.split(',')[1]);
  streetSuffixes = StreetSuffixes.split('\n');

  constructor() {
    super();
    this.soldier = this.createSoldier(random.integer(1000000, 99999999));
  }

  truncatedNormalDistribution(min, max) {
    let mu = min + (max-min)/2.0
    let sigma = (max-min)/6.0
    let r = Math.round(randomNormal(mu, sigma)());
    if (r < min) return min;
    if (r > max) return max;
    return r;
  }

  createSoldier(id) {
    const firstName = random.pick(this.firstNames);
    const lastName = random.pick(this.lastNames);
    const middleInitial = String.fromCharCode(random.integer(65, 90));
    const birthdate = `${random.integer(1,12)}/${random.integer(1,30)}/${random.integer(1912,1922)}`;
    const birthplace = random.pick(this.cities);
    const eyecolor = EyeColors[weightedRandom(EyeColors.map((v) => v.weight))].value;
    const haircolor = HairColors[weightedRandom(HairColors.map((v) => v.weight))].value;
    const weight = this.truncatedNormalDistribution(140, 210);
    const height = this.truncatedNormalDistribution(5*12+2, 6*12+4);
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
      <Container className="paper">
        <Soldier soldier={this.soldier}/>
      </Container>
    );
  }
}
