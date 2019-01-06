import React, { Component } from 'react';

import Apod from '../apis/Apod';
import NeoWs from '../apis/NeoWs';

class Data extends Component {
  render() {
    return (
      <div>
        Data
        <Apod />
        <NeoWs />
      </div>
    );
  }
}

export default Data;
