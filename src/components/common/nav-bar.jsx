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
        <Navbar.Brand as={Link} to="/" className="navbar-brand en-mulearn">
          μLEARN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/joinus">
              Join Us
            </Link>

            <Link className="nav-link" to="/joinus/guide">
              Getting Started
            </Link>

            <Link className="nav-link" to="/community/tasks">
              All Tasks
            </Link>

            <Link className="nav-link" to="/community/interest-groups">
              Interest Groups
            </Link>

            <Link className="nav-link" to="/campus-chapter/execom">
              Execom
            </Link>

            <Link className="nav-link" to="/campus-chapter/events">
              Events
            </Link>

            <Link className="nav-link" to="/community/faq">
              FAQ
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
