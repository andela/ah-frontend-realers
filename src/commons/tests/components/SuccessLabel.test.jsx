/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SuccessLabel from '../../components/SuccessLabel';

// test
describe('SuccessLabel Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<SuccessLabel />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
