import React from "react";
import { Button, Card, Container } from "react-bootstrap";

import "./Portfolio.css";

import MTGpp from "../../assets/images/mtgpp-screenshot.png";
import OuttaTouch from "../../assets/images/outta-touch-screenshot.png";
import PokeWire from "../../assets/images/pokewire-screenshot.png";

export default function Portfolio() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Card>
        <Card.Header as="h2">PokéWire</Card.Header>
        <Card.Img src={PokeWire} />
        <Card.Body>
          <Card.Text>Info about PokéWire.</Card.Text>
          <Button
            as="a"
            href="https://github.com/LuckySal/pokewire"
            target="_blank"
            rel="noopener noreferrer">
            Repository
          </Button>{" "}
          <Button
            as="a"
            href="https://luckysal.github.io/pokewire/"
            target="_blank"
            rel="noopener noreferrer">
            Live Site
          </Button>{" "}
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h2">MTG++</Card.Header>
        <Card.Img src={MTGpp} />
        <Card.Body>
          <Card.Text>Info about MTG++.</Card.Text>
          <Button
            as="a"
            href="https://github.com/HammontreeWebDev/MTGpp"
            target="_blank"
            rel="noopener noreferrer">
            Repository
          </Button>{" "}
          <Button
            as="a"
            href="https://peaceful-escarpment-11973.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            Live Site
          </Button>{" "}
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h2">OuttaTouch</Card.Header>
        <Card.Img src={OuttaTouch} />
        <Card.Body>
          <Card.Text>Info about OuttaTouch.</Card.Text>
          <Button
            as="a"
            href="https://github.com/argounova/outta-touch"
            target="_blank"
            rel="noopener noreferrer">
            Repository
          </Button>{" "}
          <Button
            as="a"
            href="https://outta-touch.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            Live Site
          </Button>{" "}
        </Card.Body>
      </Card>
    </Container>
  );
}
