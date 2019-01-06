import React from 'react';

import Main from './components/Main';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className='row index-bg'>
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
