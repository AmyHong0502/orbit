import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../contents/Home';
import Apod from '../../contents/Apod';
import NeoWs from '../../contents/NeoWs';

class Main extends React.Component {
  render() {
    return (
      <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4 h-100'>
        <div className='d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
          <Route path='/' exact component={Home} />
          <Route path='/apod' exact component={Apod} />
          <Route path='/neows' exact component={NeoWs} />
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default Main;
