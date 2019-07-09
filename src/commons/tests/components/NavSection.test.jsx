/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import NavSection from '../../components/NavSection';
// test
describe('NavSection Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<NavSection />);

    expect(component).toMatchSnapshot();
  });
});
