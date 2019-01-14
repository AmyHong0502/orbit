import React, { Component } from 'react';
import eonet from '../../apis/eonet';

class Eonet extends Component {
  state = {
    response: null
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await eonet.get('/layers');

    const data = response.data;

    this.setState({
      response: data
    });
  };

  render() {
    return (
      <div>
        Eonet
        <ul>
          <li>events</li>
          <li>categories</li>
          <li>layers</li>
        </ul>
      </div>
    );
  }
}

export default Eonet;
