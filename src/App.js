import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Layout from './components/layout/Root';

class App extends Component {
  render() {
    console.log(
      '%cHello world!',
      'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
    );
    console.log(
      "%cInterested in this website's %csource code%c? Here's a link to the %cGitHub Repository: \n%chttps://github.com/AmyHong0502/orbit",
      'color: #242326; font-size: 1.5em;',
      'color: blue; font-size: 1.5em;',
      'color: #242326; font-size: 1.5em;',
      'color: blue; font-size: 1.5em;',
      'color: red; font-size: 2em; font-weight: 900;'
    );
    return (
      <BrowserRouter>
        <Route path='/' component={Layout} />
      </BrowserRouter>
    );
  }
}

export default App;
