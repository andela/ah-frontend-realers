import {
  Nav, Form, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import React from 'react';
import '../CSS/Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchKey: value,
    });
  }

  render() {
    const { searchKey } = this.state;
    return (
      <Nav className="justify-content-center bg-dark Nav" activeKey="/home">
        <InputGroup className="search-box">
          <InputGroup.Prepend>
            <InputGroup.Text className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form inline onSubmit={(e) => { e.preventDefault(); }}>
            <FormControl
                type="text"
                placeholder="Search articles by tag, title or author ..."
                className="mr-sm-2 search-input"
                onChange={this.handleChange}
                value={searchKey}
                required
              />
            <Button type="button" href={`/search/${searchKey}`} className="search-btn">SEARCH</Button>
          </Form>
        </InputGroup>
      </Nav>
    );
  }
}

export default Search;
