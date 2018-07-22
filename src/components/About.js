import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'
export default class About extends Component {
  render() {
    return (
      <Container>
        <h1>About</h1>
        <p>
          I made this little app to generate a new recruit for games like B-17 QotS or Target for Today.
          It's in a printable sheet you can use for tracking the characters progress through your missions.
          It's designed to be generic, so it could be use for any sort of game where you need a random WWII soldier.
        </p>

        <p>
          Feedback can be sent to me at <a href="mailto:duane@duanefields.com">duane@duanefields.com</a>.
        </p>

        <h2>Change Log</h2>
        <ul>
          <li>7/22/18 - height, weight now use a normal distribution</li>
          <li>7/22/18 - hair and eye colors now weighted to most common values</li>
          <li>7/22/18 - added menu bar and about page</li>
        </ul>
      </Container>
    )
  }
}