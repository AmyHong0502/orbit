import React from 'react';
import ReactDOM from 'react-dom';
import Apod from './components/Apod';
import NeoWs from './components/NeoWs';

const App = () => {
  return (
    <div>
      <Apod />
      <NeoWs />
      Hello world!
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
