/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FooterSection from '../../components/FooterSection';

// test
describe('FooterSection Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<FooterSection />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
