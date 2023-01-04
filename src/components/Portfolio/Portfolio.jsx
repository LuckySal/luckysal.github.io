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
          <Card.Text>PokéWire is a frontend application for fans of the popular Pokémon video game franchise. It allows users to search for their favorite Pokémon characters and find in-depth information about them, such as which games they appear in and where they are located in those games.</Card.Text>
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
      <br />
      <Card>
        <Card.Header as="h2">MTG++</Card.Header>
        <Card.Img src={MTGpp} />
        <Card.Body>
          <Card.Text>MTG++ is a full-stack application built to assist fans of the popular collectible card game Magic: The Gathering. It allows users to create an account, create personal decks, add or remove individual cards from the decks, and view card details. Its main technologies are MySQL and Express.js .</Card.Text>
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
      <br />
      <Card>
        <Card.Header as="h2">OuttaTouch</Card.Header>
        <Card.Img src={OuttaTouch} />
        <Card.Body>
          <Card.Text>OuttaTouch is a minimalist group messaging application. It allows users to create and join groups, where they can send text messages to each other and get new message updates in real time. Its primary technologies are React, MongoDB, and Websocket.</Card.Text>
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
