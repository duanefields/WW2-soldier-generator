import React, { Component } from 'react';
import './Soldier.css';

export default class Soldier extends Component {
  render() {
    const soldier = this.props.soldier;

    return (
      <div className="soldier">
        <h1>Military Service Record</h1>

        <table className="form">
          <tbody>

            <tr>
              <td colspan="2">
                <label>Last Name, First Name</label>
                {soldier.lastName}, {soldier.firstName} {soldier.middleInitial}.
              </td>
              <td>
                <label>Serial No.</label>
                {soldier.id}
              </td>
              <td colspan="2">
                <label>Place of Birth</label>
                {soldier.birthplace}
              </td>
              <td colspan="2">
                <label>Date of Birth</label>
                {soldier.birthdate}
              </td>
            </tr>

            <tr>
              <td colspan="3">
                <label>Permanent Address</label>
                {soldier.streetAddress}<br/>
                {soldier.addressCityState}
              </td>

              <td>
                <label>Color Eyes</label>
                {soldier.eyecolor}
              </td>
              <td>
                <label>Color Hair</label>
                {soldier.haircolor}
              </td>
              <td>
                <label>Height</label>
                {Math.floor(soldier.height / 12)}'
                &nbsp;
                {soldier.height % 12}"
              </td>
              <td>
                <label>Weight</label>
                {soldier.weight} lbs.
              </td>
            </tr>
        

          </tbody>
        </table>

        <h2>Military History</h2>

        <table className="form">
          <tbody>  

            <tr>
              <td>
                <label>Military Occupational Specialty</label>
              </td>
              <td>
                <label>Military Qualifications</label>
              </td>
            </tr>

            <tr>
              <td colspan="2" className="bigbox">
                <label>Battles and Campaigns</label>
              </td>
            </tr>

            <tr>
              <td colspan="2" className="bigbox">
                <label>Decorations and Citations</label>
              </td>
            </tr>

            <tr>
              <td colspan="2" className="bigbox">
                <label>Wounds Received in Action</label>
              </td>
            </tr>

            <tr>
              <td colspan="2" className="bigbox">
                <label>Remarks</label>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

