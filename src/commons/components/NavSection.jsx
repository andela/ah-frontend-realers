import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function NavSection() {
  return (
    <>
      <Navbar className="nav-section">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="225"
            height="46"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end nav-auth-section">
          <Link to="/login">
            <Navbar.Text variant="light">
              Login &nbsp;|
            </Navbar.Text>
          </Link>
          <Link to="/signup">
            <Navbar.Text variant="light">
              &nbsp; Signup
            </Navbar.Text>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
