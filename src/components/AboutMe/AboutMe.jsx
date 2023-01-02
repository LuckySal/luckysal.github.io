import React from "react";

import { Container, Image, Row, Col } from "react-bootstrap";

import "./AboutMe.css";

import Selfie from "../../assets/images/me.png";

export default function AboutMe() {
  return (
    <Container id="about-me">
      <Row>
        <Col className="about-me" sm={4}>
          <Image src={Selfie} alt="Brandon Hill" fluid={true} rounded={true}/>
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
