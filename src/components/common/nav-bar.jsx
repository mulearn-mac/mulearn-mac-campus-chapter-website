import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav-bar.css";
// react Bootstrap navbar elements
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <div className="bg-orange py-1 sticky-top">
      <Navbar expand="lg" bg="light" varient="light" className="px-2">
        <Navbar.Brand as={Link} to="/" className=" en-mulearn">
          μLEARN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/joinus">
              Join Us
            </Nav.Link>

            <Nav.Link as={Link} to="/joinus/guide">
              Getting Started
            </Nav.Link>

            <Nav.Link as={Link} to="/community/tasks">
              All Tasks
            </Nav.Link>

            <Nav.Link as={Link} to="/community/interest-groups">
              Interest Groups
            </Nav.Link>

            <Nav.Link as={Link} to="/campus-chapter/execom">
              Execom
            </Nav.Link>

            <Nav.Link as={Link} to="/campus-chapter/events">
              Events
            </Nav.Link>

            <Nav.Link as={Link} to="/community/faq">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
