/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '../../containers/Search';

describe('Search Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Search />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onchange method when user type in input', () => {
    const event = {
      target: {
        value: 'article-book',
      },
    };
    const wrapper = shallow(<Search />);
    const instance = wrapper.instance();
    instance.handleChange(event);
    expect(instance.state.searchKey).toBe('article-book');
  });

  it('should prevent default default of form submit onsubmit', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<Search />);
    wrapper.find('Form').simulate('submit', event);
    expect(wrapper.find('Button').prop('active')).toBe(false);
  });
});
