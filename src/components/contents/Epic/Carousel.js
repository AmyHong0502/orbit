import React, { Component } from 'react';
import CarouselItem from './CarouselItem';

class Carousel extends Component {
  renderCarouselItems() {
    let Items = [];

    for (let i = 0; i < this.props.data.length; i++) {
      const item = this.props.data[i];

      Items.push(
        <CarouselItem
          key={item.identifier}
          caption={item.caption}
          imageUrl={this.makeImageString(item.image)}
          date={item.date}
          index={i}
        />
      );
    }

    return Items;
  }

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

  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }

    return (
      <div
        id='carouselIndicators'
        className='carousel slide carousel-fade'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselIndicators'
            data-slide-to='0'
            className='active'
          />
          <li data-target='#carouselIndicators' data-slide-to='1' />
          <li data-target='#carouselIndicators' data-slide-to='2' />
        </ol>
        <div className='carousel-inner'>{this.renderCarouselItems()}</div>
        <a
          className='carousel-control-prev'
          href='#carouselIndicators'
          role='button'
          data-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselIndicators'
          role='button'
          data-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
