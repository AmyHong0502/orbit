import { API_KEY } from '../../../apis/credentials';
import React, { Component } from 'react';
import RowItem from './RowItem';
import nasa from '../../../apis/nasa';
import Subtitle from './Subtitle';

class Notifications extends Component {
  state = {
    data: [
      {
        messageBody: null,
        messageID: null,
        messageIssueTime: null,
        messageType: null,
        messageURL: null
      }
    ]
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await nasa.get('/DONKI/notifications', {
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
        <div key={item.messageID} className='mb-5 mt-5 container'>
          <RowItem name={'messageID'} content={item.messageID} />
          <RowItem name={'messageBody'} content={item.messageBody} />
          <RowItem name={'messageIssueTime'} content={item.messageIssueTime} />
          <RowItem name={'messageType'} content={item.messageType} />
          <RowItem name={'messageURL'} content={item.messageURL} />
        </div>
      );
    });

  render() {
    return (
      <div>
        <Subtitle text={'Notifications'} />
        {this.renderList()}
      </div>
    );
  }
}

export default Notifications;
