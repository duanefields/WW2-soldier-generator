import React, { Component } from 'react';
import './App.css';
import Soldier from './components/Solider';

/* eslint import/no-webpack-loader-syntax: off */
import FirstNamesText from '!raw-loader!./data/firstNames.txt';
import LastNamesText from '!raw-loader!./data/lastNames.txt';
import CitiesText from '!raw-loader!./data/cities.txt';

import Random from 'random-js';
const random = Random();

class App extends Component {
  firstNames = FirstNamesText.split('\n');
  lastNames = LastNamesText.split('\n');
  cities = CitiesText.split('\n');
  soldiers = [];

  constructor() {
    super();
    this.soldiers = [
      this.createSoldier(random.integer(1000000, 99999999))
    ];
  }

  createSoldier(id) {
    const firstName = random.pick(this.firstNames);
    const lastName = random.pick(this.lastNames);
    const middleInitial = String.fromCharCode(random.integer(65,65+26));
    const birthdate = `${random.integer(1,12)}/${random.integer(1,30)}/${random.integer(1912,1922)}`;
    const birthplace = random.pick(this.cities);
    return { id, firstName, lastName, middleInitial, birthdate, birthplace }
  }

  render() {
    const soldierList = this.soldiers.map(s => <Soldier data={s} key={s.id}/>);
    return (
      <div>
        <h1>Military Service Record</h1>
        { soldierList }
      </div>
    );
  }
}

export default App;
