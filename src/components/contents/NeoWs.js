import { API_KEY } from '../../apis/credentials.json';
import React, { Component } from 'react';
import nasa from '../../apis/nasa';
import dateParam from '../../apis/dateParam';

class NeoWs extends Component {
  state = {
    elementCount: null,
    links: [],
    nearEarthObjects: null
  };

  componentDidMount() {
    this.loadNeoWsData();
  }

  loadNeoWsData = async () => {
    const SEVEN_DAYS = 7;

    const startDateParam = dateParam();
    const endDateParam = dateParam(SEVEN_DAYS);

    const response = await nasa.get('/neo/rest/v1/feed', {
      params: {
        start_date: startDateParam,
        end_date: endDateParam,
        api_key: API_KEY
      }
    });

    this.setState({
      elementCount: response.data.element_count,
      links: response.data.links,
      nearEarthObjects: response.data.near_earch_objects
    });
  };

  render() {
    return (
      <div>
        <h1 className='display-4 mb-1'>Near Earth Object Web Service</h1>
        <div className='h4 lead mb-4'>
          RESTful web service for near earth Asteroid information
        </div>
        <div>
          With NeoWs a user can:
          <ul>
            <li>
              FEED: search for Asteroids based on their closest approach date to
              Earth,
            </li>
            <li>
              LOOKUP: lookup a specific Asteroid with its NASA JPL small body
              id, and
            </li>
            <li>BROWSE: browse the overall data-set.</li>
          </ul>
        </div>
        <div>
          All the data is from the NASA JPL Asteroid team
          (http://neo.jpl.nasa.gov/).
        </div>
        <div>
          This API is maintained by SpaceRocks Team: David Greenfield, Arezu
          Sarvestani, Jason English and Peter Baunach.
        </div>
        <p>Element count: {this.state.elementCount}</p>
        Prev week:
        <button className='text-primary'>{this.state.links.prev} </button>
        This week:
        <button className='text-primary'>{this.state.links.self}</button>
        Next week:
        <button className='text-primary'>{this.state.links.next}</button>
        <p className='text-info'>{this.state.nearEarthObjects}</p>
      </div>
    );
  }
}

export default NeoWs;
