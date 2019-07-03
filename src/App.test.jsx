/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// test
describe('App Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
