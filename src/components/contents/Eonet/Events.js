import React, { Component } from 'react';
import Subtitle from './Subtitle';
import eonet from '../../../apis/eonet';

class Events extends Component {
  state = {
    data: {
      title: null,
      description: null,
      events: [
        {
          id: null,
          title: null,
          categories: [
            {
              id: null,
              title: null
            }
          ],
          description: null,
          geometries: [
            {
              coordinates: [
                {
                  0: null,
                  1: null
                }
              ],
              date: null,
              type: null
            }
          ],
          link: null,
          sources: [
            {
              id: null,
              url: null
            }
          ]
        }
      ],
      link: null
    }
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await eonet.get('/events');

    const data = response.data;
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div>
        <Subtitle text={'Events'} />
        <p>{this.state.data.title}</p>
        <p>{this.state.data.description}</p>
        <p>{this.state.data.link}</p>
      </div>
    );
  }
}

export default Events;
