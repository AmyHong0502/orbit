import React from 'react';
import Data from './Data';

class Main extends React.Component {
  render() {
    if (this.props.selected) {
      return (
        <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4 h-100'>
          <div className='d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
            <h1 className='h2'>Main</h1>
          </div>

          <h2 className='text-white'>{this.props.selected.name}</h2>
          <p>{this.props.selected.description}</p>
          <Data />
        </main>
      );
    }

    return (
      <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4 h-100'>
        <div className='d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
          Main
        </div>
      </main>
    );
  }
}

export default Main;
