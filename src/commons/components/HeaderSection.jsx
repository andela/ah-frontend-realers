import React from 'react';
import { withRouter } from 'react-router';
import NavSection from './NavSection';
import MenuBar from './MenuBar';
import Search from '../containers/Search';

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    const { location } = this.props;
    localStorage.removeItem('user_token');
    location.reload();
  }

  render() {
    return (
      <header>
        <NavSection logOut={this.logOut} />
        <MenuBar />
        <Search />
      </header>
    );
  }
}

HeaderSection.propTypes = {

};

export default withRouter(HeaderSection);
