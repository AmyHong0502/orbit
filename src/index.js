import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('root'));
