import React from 'react';

import { shallow } from 'enzyme';

import Button from '../../components/Button';

describe('Button Component', () => {
  it('Renders a button component', () => {

    const buttonEvent = jest.fn();
    const ButtonComponent = shallow(<Button buttonName="Login" buttonClass="btn btn-base" buttonEvent={buttonEvent} />);

    expect(ButtonComponent.find('.btn').text()).toBe('Login');
    expect(ButtonComponent.find('.btn').hasClass('btn btn-base')).toBe(true);

    ButtonComponent.find('.btn').simulate('click');
    expect(buttonEvent).toHaveBeenCalled();
  });
});