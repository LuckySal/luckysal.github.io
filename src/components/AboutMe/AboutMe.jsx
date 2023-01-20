import React from "react";

import { Container, Image, Row, Col } from "react-bootstrap";

import "./AboutMe.css";

import Selfie from "../../assets/images/me.png";
import Badge from "../../assets/images/badge.png";

export default function AboutMe() {
  return (
    <Container id="about-me">
      <Row>
        <Col className="about-me" sm={4}>
          <Image src={Selfie} alt="Brandon Hill" fluid={true} rounded={true} />
          <a
            className="icon px-3"
            href="https://api.badgr.io/public/assertions/cVgk6Z03Tw2PCSofrSM3sA?identity__email=hillbp2014%40gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Badge} alt="Coding boot camp badge" width="400" height="500"/>
          </a>
        </Col>
        <Col className="about-me" sm={8}>
          <p>
            Hello! My name is Brandon Hill. I am a Full-Stack Web Developer from Vero Beach, Florida. I received my certificate from the University of Central Florida in December of 2022. I am looking to begin a career in web development.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
