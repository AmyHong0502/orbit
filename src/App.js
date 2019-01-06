import React, { Component } from 'react';

import Main from './components/Main';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    selectedMenu: null
  };

  onMenuItemSelect = menuItem => {
    this.setState({
      selectedMenu: menuItem
    });
  };

  render() {
    return (
      <div className='row index-bg'>
        <NavBar onMenuItemSelect={this.onMenuItemSelect} />
        <Main selected={this.state.selectedMenu} />
      </div>
    );
  }
}

export default App;
