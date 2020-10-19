import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Works.css';

const Works = () => {
    return (
        <section className = "slider">
        <h5 style = {{color:"#ffffff", padding : "50px"}}>Here are some of <span style= {{color: "#79b059"}}>our works</span></h5>
        <Carousel>
  <Carousel.Item className = "mb-5">
    <img
      className = "img-fluid"
      src="https://i.ibb.co/X8nqYbt/carousel-1.png"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item className = "mb-5">
    <img
      className = "img-fluid"
      src="https://i.ibb.co/VN616Rj/carousel-2.png"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item className = "mb-5">
    <img
      className = "img-fluid"
      src="https://i.ibb.co/K9R74ry/carousel-3.png"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item className = "mb-5">
    <img
      className = "img-fluid"
      src="https://i.ibb.co/VWcQY5Y/carousel-4.png"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item className = "mb-5">
    <img
      className = "img-fluid"
      src="https://i.ibb.co/L1MFwB8/carousel-5.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </section>
    );
};

export default Works;