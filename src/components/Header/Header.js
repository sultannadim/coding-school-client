import React from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar className="nav-bg py-3" expand="lg">
        <Container>
          <Link to="/" className="my-logo">
            <img src={logo} alt="Logo" className="logo-img" />
            CODING SCHOOL
          </Link>
          <Navbar.Toggle
            className="shadow-none bg-light"
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse>
            <Nav
              className="ms-auto my-2 my-lg-0 my-nav align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="mb-lg-0  mt-lg-0 mt-2 mb-3" to="/courses">
                Courses
              </Link>
              <Link className="mb-lg-0 mb-3" to="/faq">
                FAQ
              </Link>
              <Link className="mb-lg-0 mb-3" to="/blog">
                Blog
              </Link>
              <Link className="mb-lg-0 mb-3" to="/login">
                Log in
              </Link>
              <Link className="mb-lg-0 mb-3">Dark Theme</Link>
              <Link>
                <img
                  src="https://images.inuth.com/2017/05/1Shah-Rukh-Khan-shares-his-first-look-from-Anand-L-Rais-next.jpg"
                  title="Profile"
                  alt="Profile"
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
