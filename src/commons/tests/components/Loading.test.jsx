/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from '../../components/Loading';

// test
describe('<Loading> Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Loading />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
