import { API_KEY } from '../../../apis/credentials';
import React, { Component } from 'react';
import RowItem from './RowItem';
import nasa from '../../../apis/nasa';
import Subtitle from './Subtitle';

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

  renderList = () =>
    this.state.data.map(item => {
      return (
        <div key={item.associatedCMEID} className='mb-5 mt-5 container'>
          <RowItem name={'associatedCMEID'} content={item.associatedCMEID} />
          <RowItem name={'catalog'} content={item.catalog} />
          <RowItem name={'halfAngle'} content={item.halfAngle} />
          <RowItem name={'isMostAccurate'} content={item.isMostAccurate} />
          <RowItem name={'latitude'} content={item.latitude} />
          <RowItem name={'longitude'} content={item.longitude} />
          <RowItem name={'note'} content={item.note} />
          <RowItem name={'speed'} content={item.speed} />
          <RowItem name={'time21_5'} content={item.time21_5} />
          <RowItem name={'type'} content={item.type} />
        </div>
      );
    });

  render() {
    return (
      <div>
        <Subtitle text={'Coronal Mass Ejection Analysis'} />
        {this.renderList()}
      </div>
    );
  }
}

export default CmeAnalysis;
