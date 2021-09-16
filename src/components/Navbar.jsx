import React from "react";
import { Container, Nav, Navbar, NavDropdown, Alert } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenres } from "../services/API";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

const NavbarComponent = () => {
  // Gets data etc from useQuery
  const { data, error, isError, isLoading } = useQuery(
    ["GenresFromNavbar"],
    () => {
      return getGenres();
    }
  );
  return (
    <div>
      {/* Return navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="p-4"
        fixed="top"
      >
        <Container>
          {/* The logo */}
          <Navbar.Brand href="/">
            <img
              src="https://www.freelogovectors.net/wp-content/uploads/2021/08/tiger-logo-freelogovectors.net_.png"
              alt="logo"
              width="150"
              height="30"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Links in navbar */}
              <Nav.Link href="/nowplaying">Now Playing</Nav.Link>
              <Nav.Link href="/popular">Popular</Nav.Link>
              <Nav.Link href="/toprated">Top Rated</Nav.Link>
              <NavDropdown title="Genres" id="basic-nav-dropdown">
                {/* Dropdown item */}
                <NavDropdown.Item className={styles.dropdownItem}>
                  {isLoading && <p className="my-3">Loading...</p>}

                  {isError && (
                    <Alert variant="warning" className="my-3">
                      <strong>Error:</strong> {error.message}
                    </Alert>
                  )}

                  <div>
                    {/* If there are any data then map out the generes.
                    Each link goes to a specific genre */}
                    {data &&
                      data.results.genres.map((genre, i) => (
                        <div key={i}>
                          <Link to={`/genre/${genre.name}/${genre.id}/1`}>
                            <p>{genre.name}</p>
                          </Link>
                        </div>
                      ))}
                  </div>
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
