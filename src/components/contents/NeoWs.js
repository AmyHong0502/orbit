import React, { Component } from 'react';

import nasa from '../../apis/nasa';

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

    const today = new Date();
    const endDate = new Date(new Date().setDate(today.getDate() - SEVEN_DAYS));

    const startDateParam = `${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate()}`;
    const endDateParam = `${endDate.getFullYear()}-${endDate.getMonth() +
      1}-${endDate.getDate()}`;

    const response = await nasa.get('/neo/rest/v1/feed', {
      params: {
        start_date: startDateParam,
        end_date: endDateParam,
        api_key: 'DEMO_KEY'
      }
    });

    this.setState({
      elementCount: response.data.element_count,
      links: response.data.links,
      nearEarthObjects: response.data.near_earch_objects
    });

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <p>{this.state.elementCount}</p>
        <button>Prev week: {this.state.links.prev} </button>
        <button>This week: {this.state.links.self}</button>
        <button>Next week: {this.state.links.next}</button>
        <p>{this.state.nearEarthObjects}</p>
      </div>
    );
  }
}

export default NeoWs;
