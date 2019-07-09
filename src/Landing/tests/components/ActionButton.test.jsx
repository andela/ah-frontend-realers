/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ActionButton from '../../components/ActionButton';

describe('ActionButton Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<ActionButton />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
