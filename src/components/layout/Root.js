import React, { Component } from 'react';

import Main from './main';
import NavBar from './nav/NavBar';

class Root extends Component {
  render() {
    return (
      <div className='row index-bg'>
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default Root;
