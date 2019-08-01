import React from 'react';
import {
  Navbar,
  Image,
  ButtonToolbar,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const token = localStorage.getItem('user_token');
const username = localStorage.getItem('username');
export default function NavSection({ logOut }) {
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
          {
            token
              ? (
                <>
                  <Navbar.Text variant="light" className="profile-photo">
                    <Image src={logo} roundedCircle width="40" height="40" />
                  </Navbar.Text>
                  <ButtonToolbar>
                    <DropdownButton
                      drop="down"
                      title=""
                      id="dropdown-button-drop-down"
                      key="down"
                    >
                      <Dropdown.Item className="profile-name" eventKey="1">{username}</Dropdown.Item>
                      <Dropdown.Item eventKey="2" href="/profile">Profile</Dropdown.Item>
                      <Dropdown.Item eventKey="3" href="/create-article">Write an article</Dropdown.Item>
                      <Dropdown.Item eventKey="3" href="/favorite-article">My Favorite Articles</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4" onClick={logOut}>Logout</Dropdown.Item>
                    </DropdownButton>
                  </ButtonToolbar>
                </>
              )
              : (
                <>
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
                </>
              )
          }
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
