import React, { Component } from 'react';
import nasa from '../../apis/nasa';
import { API_KEY } from '../../apis/credentials.json';

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
        api_key: API_KEY
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
        <h1 className='display-4 mb-1'>Astronomy Picture of the Day</h1>
        <div className='h4 lead mb-4'>
          {this.state.title}
          <span className='text-white-50 lead pl-3'>{this.state.date}</span>
        </div>
        <img src={this.state.hdurl} alt={this.state.title} className='w-100' />
        <div className='mt-5'>
          <p className='font-weight-light text-justify mb-5'>
            {this.state.explanation}
          </p>
          <ul class='list-inline float-right'>
            <li class='list-inline-item font-weight-light text-white-50'>
              <span className='font-weight-bold text-white-50 pr-1'>
                Media type:
              </span>
              {this.state.media_type}
            </li>
            <li className='list-inline-item font-weight-light text-white-50'>
              |
            </li>
            <li class='list-inline-item font-weight-light text-white-50'>
              <span className='font-weight-bold text-white-50 pr-1'>
                Service version:
              </span>
              {this.state.service_version}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Apod;
