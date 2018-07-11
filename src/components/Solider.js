import React, { Component } from 'react';
import './Soldier.css';

export default class Soldier extends Component {
  render() {
    const soldier = this.props.data;

    return (
      <div className="soldier">
        <table className="form">
          <tbody>
            <tr>
              <td>
                <label>Name</label>
                {soldier.name}
              </td>
              <td>
                <label>Birthplace</label>
                {soldier.birthplace}
              </td>
              <td>
                <label>Birthdate</label>
                {soldier.birthdate}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

