/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '../../containers/Search';

// test
describe('Search Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Search />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
