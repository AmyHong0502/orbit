import { API_KEY } from '../../apis/credentials.json';
import React, { Component } from 'react';
import nasa from '../../apis/nasa';

class Epic extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await nasa.get('/EPIC/api/natural', {
      params: {
        api_key: API_KEY
      }
    });

    const data = response.data;

    this.setState({
      response: data
    });
  };

  render() {
    return (
      <div>
        Epic
        <ul>
          <li>natural</li>
          <ul>
            <li>date</li>
            <li>all</li>
            <li>available</li>
          </ul>
          <li>enhanced</li>
          <ul>
            <li>date</li>
            <li>all</li>
            <li>available</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Epic;
