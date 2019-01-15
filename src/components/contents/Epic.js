import { API_KEY } from '../../apis/credentials.json';
import React, { Component } from 'react';
import nasa from '../../apis/nasa';

class Epic extends Component {
  state = {
    data: [
      {
        identifier: null,
        attitude_quaternions: [
          {
            q0: null,
            q1: null,
            q2: null,
            q3: null
          }
        ],
        caption: null,
        centroid_coordinates: [
          {
            lat: null,
            lon: null
          }
        ],
        coords: [
          {
            attitude_quaternions: {
              q0: null,
              q1: null,
              q2: null,
              q3: null
            },
            centroid_coordinates: {
              lat: null,
              lon: null
            },
            dscovr_j2000_position: {
              x: null,
              y: null,
              z: null
            },
            lunar_j2000_position: {
              x: null,
              y: null,
              z: null
            },
            sun_j2000_position: {
              x: null,
              y: null,
              z: null
            }
          }
        ],
        date: null,
        dscovr_j2000_position: [
          {
            x: null,
            y: null,
            z: null
          }
        ],
        image: null,
        lunar_j2000_position: [
          {
            x: null,
            y: null,
            z: null
          }
        ],
        sun_j2000_position: [
          {
            x: null,
            y: null,
            z: null
          }
        ],
        version: '02'
      }
    ]
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
        <h1 className='display-4 mb-1'>Earth Polychromatic Imaging Camera</h1>
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
