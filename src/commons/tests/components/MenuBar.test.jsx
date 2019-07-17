/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MenuBar from '../../components/MenuBar';

// test
describe('MenuBar Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<MenuBar />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
