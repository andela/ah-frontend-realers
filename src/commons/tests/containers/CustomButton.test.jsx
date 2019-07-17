/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomButton from '../../containers/CustomButton';

// test
describe('CustomButton Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<CustomButton />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
