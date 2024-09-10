import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CarouselComponent.css';  // Import the custom CSS

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/5thGrade1.JPG"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>5th Grade Travel Blue</h3>
          <p>This is a picture of one of their first practices</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/8thGrade2.JPG"
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>8th Grade Travel D3</h3>
          <p>This is a picture after they got their first win!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/Practice1.JPG"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Practice</h3>
          <p>One of 7th Grade Travels first practices</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add other carousel items similarly */}
    </Carousel>
  );
};

export default CarouselComponent;