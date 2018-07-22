import React, { Component } from 'react';
import routes from './routes';
import {MenuBar} from './components'

export default class App extends Component {

  render() {
    return (
      <div>
        <MenuBar/>
        <div>
          {routes()}
        </div>
      </div>
    );
  }
}
