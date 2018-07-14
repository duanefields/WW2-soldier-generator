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
              </td>

              <td>
                <label>Color Eyes</label>
              </td>
              <td>
                <label>Color Hair</label>
              </td>
              <td>
                <label>Height</label>
              </td>
              <td>
                <label>Weight</label>
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

