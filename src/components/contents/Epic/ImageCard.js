import React, { Component } from 'react';
import './ImageCard.css';

class ImageCard extends Component {
  state = {
    image: null
  };

  extractDateString = dateString => {
    const regex = /(.*) (.*)/;
    const matchingGroup = dateString.match(regex);

    return matchingGroup[1];
  };

  extractTimeString = dateString => {
    const regex = /(.*) (.*)/;
    const matchingGroup = dateString.match(regex);

    return matchingGroup[2];
  };

  render() {
    if (!this.props.date) {
      return <div>Loading...</div>;
    }

    return (
      <div className='col-lg-3 col-md-4 mt-5'>
        <div className='card w-100' style={{ width: '18rem' }}>
          <img
            src={this.props.imageUrl}
            className='card-img-top'
            alt={this.props.caption}
          />
          <div className='card-body'>
            <p className='text-dark mb-1 lead'>
              {this.extractDateString(this.props.date)}
            </p>
            <p className='text-secondary mb-0 font-weight-light'>
              {this.extractTimeString(this.props.date)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
