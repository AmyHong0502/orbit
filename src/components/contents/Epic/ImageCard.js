import React, { Component } from 'react';

class ImageCard extends Component {
  state = {
    image: null
  };

  render() {
    return (
      <div className='col-3'>
        <img className='w-100' src={this.props.imageUrl} alt={this.props.caption} />
        <p>Date: {this.props.date}</p>
      </div>
    );
  }
}

export default ImageCard;
