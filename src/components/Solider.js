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
                {soldier.lastName}, {soldier.firstName} {soldier.middleInitial}.
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

            <tr>
              <td colspan="3" style={ {height:"3em"} }>
                <label>Medals and Commodations</label>
              </td>
            </tr>

            <tr>
              <td colspan="3" style={ {height:"3em"} }>
                <label>Remarks</label>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

