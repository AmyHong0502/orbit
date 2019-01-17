import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../contents/Home';
import Apod from '../../contents/Apod';
import NeoWs from '../../contents/NeoWs';
import Donki from '../../contents/Donki';
import Epic from '../../contents/Epic';
import Eonet from '../../contents/Eonet';
import GeneLabSearch from '../../contents/GeneLabSearch';
import Footer from '../Footer';

class Main extends React.Component {
  render() {
    return (
      <div id='content' className='col-md-10 ml-sm-auto px-4 h-100'>
        <main role='main'>
          <div className='d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
            <Route path='/' exact component={Home} />
            <Route path='/apod' exact component={Apod} />
            <Route path='/neows' exact component={NeoWs} />
            <Route path='/donki' component={Donki} />
            <Route path='/epic' exact component={Epic} />
            <Route path='/eonet' component={Eonet} />
            <Route path='/gene-lab' exact component={GeneLabSearch} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
