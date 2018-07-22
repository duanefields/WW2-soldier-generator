import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

class MenuBar extends Component {
  render() {
    return (
      <Menu inverted className="noprint">
        <Menu.Item as={NavLink} exact to="/" content="Generator"/>
        <Menu.Item as={NavLink} exact to="/about" content="About" position="right"/>

      </Menu>
    )
  }
}

export default withRouter(MenuBar)
