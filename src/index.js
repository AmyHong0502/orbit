import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='d-flex flex-column h-100'>
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
