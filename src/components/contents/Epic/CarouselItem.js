import React from 'react';
import './CarouselItem.css';

const CarouselItem = ({ index, caption, imageUrl, date }) => {
  const cls = index === 0 ? 'carousel-item active' : 'carousel-item';

  return (
    <div className={cls}>
      <div className='carousel-caption d-none d-md-block'>
        <h5>{caption}</h5>
        <p>{date}</p>
      </div>
      <img
        src={imageUrl}
        className='carouselItemImage d-block w-100'
        alt={caption}
      />
    </div>
  );
};

export default CarouselItem;
