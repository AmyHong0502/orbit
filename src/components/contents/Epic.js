import { API_KEY } from '../../apis/credentials.json';
import React, { Component } from 'react';
import nasa from '../../apis/nasa';
import ImageCard from './Epic/ImageCard';
import Carousel from './Epic/Carousel';

class Epic extends Component {
  state = {
    data: [
      {
        identifier: null,
        caption: null,
        date: null,
        image: null
      }
    ]
  };

  componentDidMount() {
    this.loadApiData();
  }

  loadApiData = async () => {
    const response = await nasa.get('/EPIC/api/natural', {
      params: {
        api_key: API_KEY
      }
    });

    const data = response.data;
    this.setState({ data: data });
  };

  makeImageString(image) {
    if (!image) {
      return '';
    }

    const regex = /^epic_(.*)_(.*)/;
    const matchingGroup = image.match(regex);
    const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';

    return `${baseImageUrl}/${matchingGroup[2].substring(
      0,
      4
    )}/${matchingGroup[2].substring(4, 6)}/${matchingGroup[2].substring(
      6,
      8
    )}/png/epic_${matchingGroup[1]}_${matchingGroup[2]}.png`;
  }

  renderImageCards = () =>
    this.state.data.map(item => {
      return (
        <ImageCard
          key={item.identifier}
          caption={item.caption}
          imageUrl={this.makeImageString(item.image)}
          date={item.date}
        />
      );
    });

  render() {
    return (
      <div>
        <h1 className='display-4 mb-1'>Earth Polychromatic Imaging Camera</h1>
        <Carousel data={this.state.data} />
        <div className='row'>{this.renderImageCards()}</div>
      </div>
    );
  }
}

export default Epic;
