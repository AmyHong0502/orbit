import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Layout from './components/layout/Root';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Layout} />
      </BrowserRouter>
    );
  }
}

export default App;
