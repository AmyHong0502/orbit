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

  renderList = () =>
    this.state.data.map(item => {
      return (
        <div key={item.activityID}>
          <p>activeRegionNum: {item.activeRegionNum}</p>
          <p>activityID: {item.activityID}</p>
          <p>catalog: {item.catalog}</p>
          {/* <p>cmeAnalyses: {item.cmeAnalyses}</p> */}
          {/* <p>instruments: {item.instruments}</p> */}
          <p>displayName: {item.displayName}</p>
          {/* <p>linkedEvents: {item.linkedEvents}</p> */}
          <p>note: {item.note}</p>
          <p>sourceLocation: {item.sourceLocation}</p>
          <p>startTime: {item.startTime}</p>
        </div>
      );
    });

  render() {
    if (this.state.data.length === 0) {
      return <div>Loading...</div>;
    }
    return <div>{this.renderList()}</div>;
  }
}

export default Cme;
