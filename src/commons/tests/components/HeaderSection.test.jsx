/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HeaderSection from '../../components/HeaderSection';

// test
describe('HeaderSection Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<HeaderSection />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
