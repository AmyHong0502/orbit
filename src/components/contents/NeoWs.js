import React, { Component } from 'react';

import NeoWsApi from '../../apis/NeoWs';

class NeoWs extends Component {
  render() {
    return (
      <div>
        NeoWs - Contents
        <NeoWsApi />
      </div>
    );
  }
}

export default NeoWs;
