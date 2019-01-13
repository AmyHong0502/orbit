import React, { Component } from 'react';

import ApodApi from '../../apis/Apod';

class Apod extends Component {
  render() {
    return (
      <div>
        Apod - Contents
        <ApodApi />
      </div>
    );
  }
}

export default Apod;
