import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CarouselComponent.css';  // Import the custom CSS

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/A.JPG"
          alt="Boys 5th grade travel blue"
        />
      </Carousel.Item>
      {/* Add other carousel items similarly */}
    </Carousel>
  );
};

export default CarouselComponent;
