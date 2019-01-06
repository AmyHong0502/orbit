import React from 'react';
import ReactDOM from 'react-dom';
import Apod from './components/Apod';

const App = () => {
  return (
    <div>
      <Apod />
      Hello world!
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
