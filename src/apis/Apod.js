import React from 'react';
import nasa from './nasa';

class Apod extends React.Component {
  state = {
    date: null,
    explanation: null,
    hdurl: null,
    media_type: null,
    service_version: null,
    title: null,
    url: null
  };

  onButtonClick = async () => {
    const response = await nasa.get('/planetary/apod', {
      params: {
        api_key: 'DEMO_KEY'
      }
    });
    const data = response.data;

    this.setState({
      date: data.date,
      explanation: data.explanation,
      hdurl: data.hdurl,
      media_type: data.media_type,
      service_version: data.service_version,
      title: data.title,
      url: data.url
    });
  };

  render() {
    return <button onClick={this.onButtonClick}>Apod</button>;
  }
}

export default Apod;
