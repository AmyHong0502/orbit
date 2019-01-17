import { API_KEY } from '../../../apis/credentials';
import React, { Component } from 'react';
import Subtitle from './Subtitle';
import RowItem from './RowItem';
import nasa from '../../../apis/nasa';

class Ips extends Component {
  state = {
    data: [
      {
        activityID: null,
        catalog: null,
        eventTime: null,
        instruments: [
          {
            id: null,
            displayName: null
          }
        ]
      }
    ]
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await nasa.get('/DONKI/IPS', {
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
          <RowItem name={'activityID'} content={item.activityID} />
          <RowItem name={'catalog'} content={item.catalog} />
          <RowItem name={'eventTime'} content={item.eventTime} />
          <RowItem name={'instruments'} content={item.instruments} />
        </div>
      );
    });

  render() {
    return (
      <div>
        <Subtitle text={'Interplanetary Shock'} />
        {this.renderList()}
      </div>
    );
  }
}

export default Ips;
