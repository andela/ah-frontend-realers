import {
  Nav, Form, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import React from 'react';
import '../CSS/Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  return (
    <Nav className="justify-content-center bg-dark Nav" activeKey="/home">
      <InputGroup className="search-box">
        <InputGroup.Prepend>
          <InputGroup.Text className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search articles by tag, title or author ..."
            className="mr-sm-2 search-input"
          />
          <Button type="button" className="search-btn">SEARCH</Button>
        </Form>
      </InputGroup>
    </Nav>
  );
}
