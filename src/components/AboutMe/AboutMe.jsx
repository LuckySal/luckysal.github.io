import React from "react";
import { Container } from "react-bootstrap";
import "./AboutMe.css";

import Selfie from "../../assets/images/me.png";

export default function AboutMe() {
  return (
    <Container id="about-me">
      <main>
        <img src={Selfie} />
        <div>
          <p>
            Hello! My name is Brandon Hill. I'm a Full-Stack Web Developer from
            Florida.
          </p>
        </div>
      </main>
    </Container>
  );
}
