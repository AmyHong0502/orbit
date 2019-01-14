import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../contents/Home';
import Apod from '../../contents/Apod';
import NeoWs from '../../contents/NeoWs';
import Donki from '../../contents/Donki';
import Epic from '../../contents/Epic';
import Eonet from '../../contents/Eonet';
import Earth from '../../contents/Earth';
import ExoplanetArchive from '../../contents/ExoplanetArchive';
import GeneLabSearch from '../../contents/GeneLabSearch';

class Main extends React.Component {
  render() {
    return (
      <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4 h-100'>
        <div className='d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
          <Route path='/' exact component={Home} />
          <Route path='/apod' exact component={Apod} />
          <Route path='/neows' exact component={NeoWs} />
          <Route path='/donki' exact component={Donki} />
          <Route path='/epic' exact component={Epic} />
          <Route path='/eonet' exact component={Eonet} />
          <Route path='/earth' exact component={Earth} />
          <Route path='/exoplanet-archive' exact component={ExoplanetArchive} />
          <Route path='/gene-lab' exact component={GeneLabSearch} />
        </div>
      </main>
    );
  }
}

export default Main;
