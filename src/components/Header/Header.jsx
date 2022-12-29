import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

import logo from "../../logo.svg";
import resume from "../../assets/files/resume.pdf";

function Header({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => handlePageChange("Home")}>
          <img
            src={logo}
            style={{ height: 50, width: 50 }}
            alt="website logo"
          />
          Brandon Hill
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" defaultActiveKey="home">
            <Nav.Link eventKey="home" tabIndex={0} onClick={() => handlePageChange("Home")}>Home</Nav.Link>
            <Nav.Link eventKey="about-me" tabIndex={1} onClick={() => handlePageChange("About Me")}>About Me</Nav.Link>
            <Nav.Link eventKey="portfolio" tabIndex={2} onClick={() => handlePageChange("Portfolio")}>Portfolio</Nav.Link>
            <Nav.Link href={resume} eventKey="resume" tabIndex={3} target="_blank" rel="noopener noreferrer">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
