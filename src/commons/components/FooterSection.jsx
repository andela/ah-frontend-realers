import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import MenuBar from './MenuBar';
import '../CSS/FooterSection.scss';

export default function FootSection() {
  return (
    <div className="footer-body">
      <MenuBar />
      <Nav className="footer-section">
        <span>
          <FontAwesomeIcon icon={faCopyright} />
          &nbsp; Author&apos;s Haven
        </span>
      </Nav>
    </div>
  );
}
