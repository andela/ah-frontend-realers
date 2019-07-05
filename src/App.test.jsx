/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

// test
describe('App Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<App />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
