import { API_KEY } from '../../../apis/credentials';
import React, { Component } from 'react';
import Subtitle from './Subtitle';
import RowItem from './RowItem';
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
        <div key={item.activityID} className='mb-5 mt-5 container'>
          <RowItem name={'activeRegionNum'} content={item.activeRegionNum} />
          <RowItem name={'activityID'} content={item.activityID} />
          <RowItem name={'catalog'} content={item.catalog} />
          <RowItem name={'cmeAnalyses'} content={item.cmeAnalyses} />
          <RowItem name={'instruments'} content={item.instruments} />
          <RowItem name={'displayName'} content={item.displayName} />
          <RowItem name={'linkedEvents'} content={item.linkedEvents} />
          <RowItem name={'note'} content={item.note} />
          <RowItem name={'sourceLocation'} content={item.sourceLocation} />
          <RowItem name={'startTime'} content={item.startTime} />
        </div>
      );
    });

  render() {
    return (
      <div>
        <Subtitle text={'Coronal Mass Ejection'} />
        {this.renderList()}
      </div>
    );
  }
}

export default Cme;
