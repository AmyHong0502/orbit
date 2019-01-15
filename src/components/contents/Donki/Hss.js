import { API_KEY } from '../../../apis/credentials';
import React, { Component } from 'react';
import RowItem from './RowItem';
import nasa from '../../../apis/nasa';

class Hss extends Component {
  state = {
    data: [
      {
        eventTime: null,
        hssID: null,
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
        ]
      }
    ]
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await nasa.get('/DONKI/HSS', {
      params: {
        api_key: API_KEY
      }
    });
    const data = response.data;

    this.setState({
      data: data
    });

    console.log(this.state.data);
  };

  renderList = () =>
    this.state.data.map(item => {
      return (
        <div key={item.hssID} className='mb-5 mt-5 container'>
          <RowItem name={'hssID'} content={item.hssID} />
          <RowItem name={'eventTime'} content={item.eventTime} />
          <RowItem name={'instruments'} content={item.instruments} />
          <RowItem name={'linkedEvents'} content={item.linkedEvents} />
        </div>
      );
    });

  render() {
    return (
      <div>
        <h1 className='display-4 mb-1'>Hight Speed Stream</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default Hss;
