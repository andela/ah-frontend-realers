import React from 'react';
import { Nav } from 'react-bootstrap';
import '../CSS/Header.scss';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return (
    <>
      <Nav className="justify-content-center menu-section" activeKey="/">
        <Link to="/">
          <Nav.Item>
            HOME
          </Nav.Item>
        </Link>
        <Link to="/latest">
          <Nav.Item>
            LATEST
          </Nav.Item>
        </Link>
        <Link to="/top">
          <Nav.Item>
            TOP
          </Nav.Item>
        </Link>
        <Link to="/about">
          <Nav.Item>
            ABOUT
          </Nav.Item>
        </Link>
      </Nav>
    </>
  );
}
