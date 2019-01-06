import React from 'react';
import Data from './Data';

class Main extends React.Component {
  render() {
    return (
      <main role='main' class='col-md-9 ml-sm-auto col-lg-10 px-4 h-100'>
        <div class='d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
          <h1 class='h2'>Main</h1>
        </div>
        <Data />
      </main>
    );
  }
}

export default Main;
