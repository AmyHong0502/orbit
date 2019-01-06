import React from 'react';

import Apod from '../apis/Apod';
import NeoWs from '../apis/NeoWs';

const Main = () => {
  return (
    <main role='main' className='flex-shrink-0'>
      <div className='container'>
        <h1 className='mt-5'>Orbit</h1>
      </div>

      <Apod />
      <NeoWs />
    </main>
  );
};

export default Main;
