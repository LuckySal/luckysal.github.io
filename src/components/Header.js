import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../logo.svg";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            style={{ height: 50, width: 50 }}
            alt="website logo"
          />
          Brandon Hill
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-me">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
