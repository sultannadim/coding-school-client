import React from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isDark, setIsdark] = useState("dark theme");
  const [mode, setMode] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const handelDarkMode = () => {
    if (mode) {
      setMode(false);
      setIsdark("light theme");
    } else {
      setMode(true);
      setIsdark("dark theme");
    }
  };
  const handelLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {});
  };
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
              <Link className="mb-lg-0 mb-3" onClick={handelDarkMode}>
                {isDark}
              </Link>

              {user?.uid ? (
                <>
                  <Link onClick={handelLogOut} className="mb-lg-0 mb-3">
                    Log out
                  </Link>
                </>
              ) : (
                <Link className="mb-lg-0 mb-3" to="/login">
                  Log in
                </Link>
              )}

              {user?.displayName && (
                <Link className="mb-lg-0 mb-3 text-danger" to="/">
                  {user.displayName}
                </Link>
              )}
              {user?.uid && (
                <>
                  {user?.photoURL ? (
                    <Link>
                      <img
                        src={user.photoURL}
                        title={user.displayName}
                        alt="Profile"
                      />
                    </Link>
                  ) : (
                    <Link>
                      <FaUserAlt></FaUserAlt>
                    </Link>
                  )}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
