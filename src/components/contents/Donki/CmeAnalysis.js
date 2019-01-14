import { API_KEY } from '../../../apis/credentials';
import React, { Component } from 'react';
import nasa from '../../../apis/nasa';

class CmeAnalysis extends Component {
  state = {
    data: [
      {
        associatedCMEID: null,
        catalog: null,
        halfAngle: null,
        isMostAccurate: null,
        latitude: null,
        longitude: null,
        note: null,
        speed: null,
        time21_5: null,
        type: null
      }
    ]
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await nasa.get('/DONKI/CMEAnalysis', {
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
        <div key={item.associatedCMEID} className='mb-5 mt-5 container'>
          {this.rowItem('associatedCMEID', item.associatedCMEID)}
          {this.rowItem('catalog', item.catalog)}
          {this.rowItem('halfAngle', item.halfAngle)}
          {this.rowItem('isMostAccurate', item.isMostAccurate)}
          {this.rowItem('latitude', item.latitude)}
          {this.rowItem('longitude', item.longitude)}
          {this.rowItem('note', item.note)}
          {this.rowItem('speed', item.speed)}
          {this.rowItem('time21_5', item.time21_5)}
          {this.rowItem('type', item.type)}
        </div>
      );
    });

  render() {
    return (
      <div>
        <h1 className='display-4'>Coronal Mass Ejection Analysis</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default CmeAnalysis;
