import React from "react";
import { Container, Nav, Navbar, NavDropdown, Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/API";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { data, error, isError, isLoading } = useQuery(["genres"], () => {
    return getGenres();
  });
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
              <Nav.Link href="/latest">Latest</Nav.Link>
              <Nav.Link href="/popular">Popular</Nav.Link>
              <Nav.Link href="/toprated">Top Rated</Nav.Link>
              <NavDropdown title="Genres" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Container className="py-3">
                    {isLoading && <p className="my-3">Loading...</p>}

                    {isError && (
                      <Alert variant="warning" className="my-3">
                        <strong>Error:</strong> {error.message}
                      </Alert>
                    )}

                    <div>
                      {data &&
                        data.results.genres.map((genre, i) => (
                          <div key={i}>
                            <Link to={`genre/${genre.id}`}>
                              <p>{genre.name}</p>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </Container>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
