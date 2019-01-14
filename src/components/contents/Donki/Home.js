import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='display-4 mb-1'>
          Space Weather Database Of Notifications, Knowledge, Information
        </h1>
        <ul>
          <li>CME</li>
          <li>CME Analysis</li>
          <li>GST</li>
          <li>IPS</li>
          <li>FLR</li>
          <li>SEP</li>
          <li>MPC</li>
          <li>RBE</li>
          <li>HSS</li>
          <li>WSA+EnlilSimulation</li>
          <li>Notifications</li>
        </ul>
      </div>
    );
  }
}

export default Home;
