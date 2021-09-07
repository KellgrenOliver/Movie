import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../css/Footer.module.css";

const FooterComponent = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" className={styles.container}>
        <Container>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/1200px-Sky_Cinema_-_Logo_2020.svg.png"
            alt="logo"
            width="150"
            height="30"
          />
          <Nav className="me-auto mx-auto">
            <div className={styles.info}>
              <p>Email:</p>
              <p>City</p>
              <p>Address:</p>
              <p>ZipCode:</p>
              <p>Phone:</p>
            </div>
          </Nav>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/1200px-Sky_Cinema_-_Logo_2020.svg.png"
            alt="logo"
            width="150"
            height="30"
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default FooterComponent;
