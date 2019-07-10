import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Login from '../components/LoginComponent';

describe('Login ', () => {
  let wrapper;
  const loginprops = {
    handleSubmit: jest.fn(),
    onChange: jest.fn(),
    email: '',
    isLoggingIn: false,
    password: '',
    errors: {},
  };
  it('renders the login page', () => {
    wrapper = shallow(<Login {...loginprops} />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
