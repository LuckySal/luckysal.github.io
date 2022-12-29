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
            Hello! My name is Brandon Hill. Duis sed hendrerit orci. Pellentesque at lorem sapien. Ut vitae neque vitae justo scelerisque congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam mollis risus ac pretium fermentum. Mauris ornare ultricies libero in sagittis. Nulla convallis placerat metus ac scelerisque. Nullam sollicitudin pellentesque nibh, vel imperdiet orci. In vel erat a dolor lacinia placerat vel in elit. Praesent ac nulla sit amet ligula auctor fringilla elementum sit amet mauris. Morbi accumsan rutrum sagittis. Praesent risus mauris, pretium non elit eget, lacinia sodales sem. Sed varius leo sit amet aliquam posuere. Curabitur sit amet blandit libero, a egestas nisi. Maecenas bibendum congue turpis non vestibulum.
          </p>
          <p>
            Integer eu pretium velit, sit amet imperdiet enim. Vestibulum dapibus massa sed ante tincidunt tempus. Aenean eget magna ut risus fermentum elementum non nec quam. Curabitur tincidunt ante quis velit iaculis fringilla nec eu eros. Maecenas viverra ex sit amet sapien egestas, vitae rutrum mi posuere. Nunc sed egestas velit, vitae volutpat ex. Nulla facilisi. Mauris vel dui at eros mattis egestas quis eu velit. Nullam nec volutpat ipsum. Quisque quis nunc sodales, vestibulum orci vel, luctus diam. Nam elementum a justo quis auctor.
          </p>
          <p>
            Praesent sit amet nisi eget sapien scelerisque fermentum eu at mi. Aliquam pharetra tristique est at fringilla. Proin sed ante tortor. Nullam tincidunt ipsum sit amet felis scelerisque venenatis. Integer tellus ligula, facilisis vitae rutrum quis, dignissim et lacus. Suspendisse potenti. Donec aliquam turpis sit amet nulla fringilla ornare. Donec et felis ac mauris congue vulputate ac eu risus. Phasellus sem diam, tincidunt ac enim et, hendrerit porttitor enim.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
