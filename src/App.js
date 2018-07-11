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
      this.createSoldier(1),
      this.createSoldier(2),
      this.createSoldier(3),
    ];
  }

  createSoldier(id) {
    const name = `${random.pick(this.firstNames)} ${random.pick(this.lastNames)}`;
    const birthdate = `${random.integer(1,12)}/${random.integer(1,30)}/${random.integer(1912,1922)}`;
    const birthplace = random.pick(this.cities);
    return { id, name, birthdate, birthplace }
  }

  render() {
    const soldierList = this.soldiers.map(s => <Soldier data={s} key={s.id}/>);
    return (
      <div className="App">
        { soldierList }
      </div>
    );
  }
}

export default App;
