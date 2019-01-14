import { API_KEY } from '../../../apis/credentials';
import React, { Component } from 'react';
import nasa from '../../../apis/nasa';

class Cme extends Component {
  state = {
    data: [
      {
        activeRegionNum: null,
        activityID: null,
        catalog: null,
        cmeAnalyses: [
          {
            enlilList: null,
            halfAngle: null,
            isMostAccurate: null,
            latitude: null,
            levelOfData: null,
            longitude: null,
            note: null,
            speed: null,
            time21_5: null,
            type: null
          }
        ],
        instruments: [
          {
            displayName: null,
            id: null
          }
        ],
        linkedEvents: [
          {
            activityID: null
          }
        ],
        note: null,
        sourceLocation: null,
        startTime: null
      }
    ]
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await nasa.get('/DONKI/CME', {
      params: {
        api_key: API_KEY
      }
    });
    const data = response.data;

    this.setState({
      data: data
    });
  };

  render() {
    return <div>CME</div>;
  }
}

export default Cme;
