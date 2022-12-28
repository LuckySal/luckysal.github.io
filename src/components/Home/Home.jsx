import React from "react";

import Carousel from "react-bootstrap/Carousel";

import "./Home.css";

import Image1 from "../../assets/images/image-1.jpg";
import Image2 from "../../assets/images/image-2.jpg";
import Image3 from "../../assets/images/image-3.jpg";

export default function Home() {
  return (
    <div>
      <Carousel
        controls={false}
        indicators={false}
        keyboard={false}
        pause={false}
        touch={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <p>Home</p>
    </div>
  );
}
