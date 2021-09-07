import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/1200px-Sky_Cinema_-_Logo_2020.svg.png"
              alt="logo"
              width="150"
              height="30"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/latest">Latest</Nav.Link>
              <Nav.Link href="/popular">Popular</Nav.Link>
              <Nav.Link href="/toplist">Toplist</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
