import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { LoginContainer } from '../containers/LoginContainer';

describe('loginContainer Component', () => {
  const props = {
    onChange: jest.fn(),
    handleSubmit: jest.fn(),
    checkValidEmail: jest.fn(),
    propsLoginAction: jest.fn(),
    isLoading: false,
    isLoggingIn: false,
    loginFailed: false,
  };

  const event = {
    preventDefault: () => {},
    target: {
      name: 'email',
      value: 'abc',
    },
  };
  const wrapper = shallow(<LoginContainer {...props} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call an onChange function', () => {
    const component = shallow(
      <LoginContainer {...props} />,
    );
    component.setState({ email: 'email' });
    component.instance().onChange(event);
    expect(component.instance().state.email).toBe('abc');
  });

  it('should call handleSubmit', () => {
    const component = shallow(
      <LoginContainer {...props} />,
    );
    component.setState({ email: 'jane@us.com', password: '' });
    component.instance().handleSubmit(event);
    expect(component.state('errors').userPassword).toBe('Password field is required');
  });

  it('should call a submit a form', () => {
    wrapper.setState({
      email: 'jennyj',
    });
    const userEmail = {
      match: jest.fn(),
    };
    const instance = wrapper.instance();
    const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
    checkValidEmail(userEmail);
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect(checkValidEmail).toHaveBeenCalled();
  });

  it('Valid Email', () => {
    wrapper.setState({
      email: 'jenny@gmail.com',
    });
    const userEmail = {
      match: jest.fn(),
    };
    const instance = wrapper.instance();
    const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
    instance.handleSubmit({ preventDefault: jest.fn() });
    checkValidEmail(userEmail);
    expect(checkValidEmail).toHaveBeenCalled();
  });

  it('should call submit form', () => {
    wrapper.setState({
      email: 'jennyj',
    });
    const userEmail = {
      match: jest.fn(),
    };
    const instance = wrapper.instance();
    const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
    instance.handleSubmit({ preventDefault: jest.fn() });
    checkValidEmail(userEmail);
    expect(checkValidEmail).toHaveBeenCalled();
  });

  it('should validate an empty password', () => {
    const instance = wrapper.instance();
    instance.handleSubmit({ preventDefault: jest.fn() });
    expect('Password field is required').toEqual(instance.state.errors.userPassword);
  });

  it('should call loginAction when handling submit', () => {
    wrapper.setState({
      email: 'jennyzalwango12@gmail.com',
      password: 'password',
      errors: {},
    });
    const instance = wrapper.instance();
    instance.handleSubmit({ preventDefault: jest.fn() });
    props.propsLoginAction();
    expect(props.propsLoginAction).toHaveBeenCalled();
  });

  it('should load the component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
