import React from "react";
import { Navbar, Container } from "rbx";
import LogoImage from "../../assets/images/logo.png";
import '../../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={LogoImage} alt="Logo" />
          </Link>
          <Navbar.Burger
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu id="navbar-menu">
          <Navbar.Segment as="div" className="navbar-end" align="right">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/register" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;
