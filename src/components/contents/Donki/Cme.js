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

  rowItem = (name, contents) => {
    if (!contents) {
      return null;
    }

    return (
      <div className='row'>
        <div className='col-3 font-weight-bold'>{name}</div>
        <div className='col-9 font-weight-light'>{contents.toString()}</div>
      </div>
    );
  };

  renderList = () =>
    this.state.data.map(item => {
      return (
        <div key={item.activityID} className='mb-5 mt-5 container'>
          {this.rowItem('activeRegionNum', item.activeRegionNum)}
          {this.rowItem('activityID', item.activityID)}
          {this.rowItem('catalog', item.catalog)}
          {/* <p>cmeAnalyses: {item.cmeAnalyses}</p> */}
          {/* <p>instruments: {item.instruments}</p> */}
          {this.rowItem('displayName', item.displayName)}
          {/* <p>linkedEvents: {item.linkedEvents}</p> */}
          {this.rowItem('note', item.note)}
          {this.rowItem('sourceLocation', item.sourceLocation)}
          {this.rowItem('startTime', item.startTime)}
        </div>
      );
    });

  render() {
    return (
      <div>
        <h1 className='display-4'>Coronal Mass Ejection</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default Cme;
