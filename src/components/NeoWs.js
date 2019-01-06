import React from 'react';
import nasa from '../apis/nasa';

class NeoWs extends React.Component {
  state = {
    data: null
  };

  onButtonClick = async () => {
    const SEVEN_DAYS = 7;

    const today = new Date();
    const endDate = new Date(new Date().setDate(today.getDate() - SEVEN_DAYS));

    const startDateParam = `${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate()}`;
    const endDateParam = `${endDate.getFullYear()}-${endDate.getMonth() +
      1}-${endDate.getDate()}`;

    this.state.data = await nasa.get('/neo/rest/v1/feed', {
      params: {
        start_date: startDateParam,
        end_date: endDateParam,
        api_key: 'DEMO_KEY'
      }
    });
  };

  render() {
    return <button onClick={this.onButtonClick}>NeoWs</button>;
  }
}

export default NeoWs;
