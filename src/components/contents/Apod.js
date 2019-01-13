import React, { Component } from 'react';

import nasa from '../../apis/nasa';

class Apod extends Component {
  state = {
    date: null,
    explanation: null,
    hdurl: null,
    media_type: null,
    service_version: null,
    title: null,
    url: null
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
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

  renderTitle = () => {
    return <h1>Apod</h1>;
  };

  render() {
    return (
      <div>
        <h1>Astronomy Picture of the Day</h1>

        <span className='text-muted float-right'>{this.state.date}</span>
        <h3>{this.state.title}</h3>
        <img src={this.state.hdurl} alt={this.state.title} className="w-100"/>
        <div>
          <p>{this.state.explanation}</p>
          <p>{this.state.media_type}</p>
          <p>{this.state.service_version}</p>
        </div>
      </div>
    );
  }
}

export default Apod;
