import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import signUpUser from '../redux/actions/signUpAction';
import validation from '../Validation';
import { SignUpUserForm } from '../components/SignUp';

jest.mock('../redux/actions/signUpAction');
jest.mock('../Validation');

const storeItems = {};
const mockStore = configureStore([thunk]);
const store = mockStore(storeItems);
store.dispatch = jest.fn();

describe('SignUp Component', () => {
  let wrapper;
  beforeEach(() => {
    validation.mockReturnValueOnce('Error');
    wrapper = mount(<SignUpUserForm signUpUser={jest.fn()} isLoading={false} />);
  });
  it('Should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should render an email input', () => {
    const emailInput = wrapper.find('input#email');
    expect(emailInput).toHaveLength(1);
  });
  describe('Email Input', () => {
    it('should have its value as an empty string by default', () => {
      expect(wrapper.find('input#email').props().value).toBe('');
    });
    it('should set value to the new value onChange', () => {
      expect(wrapper.find('input#email').props().value).toBe('');
      const mockEvent = { target: { value: 'mockValue' } };
      act(() => {
        wrapper.find('input#email').props().onChange(mockEvent);
      });
      wrapper.update();
      expect(wrapper.find('input#email').props().value)
        .toBe(mockEvent.target.value);
    });
  });
  it('should render a username input', () => {
    const usernameIput = wrapper.find('input#username');
    expect(usernameIput).toHaveLength(1);
  });
  describe('username Input', () => {
    it('should have its value sa empty strings by default', () => {
      expect(wrapper.find('input#username').props().value).toBe('');
    });
    it('should should set a new value on change', () => {
      expect(wrapper.find('input#username').props().value).toBe('');
      const mockEvent = { target: { value: 'mockValue' } };
      act(() => {
        wrapper.find('input#username').props().onChange(mockEvent);
      });
      wrapper.update();
      expect(wrapper.find('input#username').props().value)
        .toBe(mockEvent.target.value);
    });
  });
  it('should render a password input', () => {
    const passwordInput = wrapper.find('input#password');
    expect(passwordInput).toHaveLength(1);
  });
  describe('password Input', () => {
    it('should have its value sa empty strings by default', () => {
      expect(wrapper.find('input#password').props().value).toBe('');
    });
    it('should should set a new value on change', () => {
      expect(wrapper.find('input#password').props().value).toBe('');
      const mockEvent = { target: { value: 'mockValue' } };
      act(() => {
        wrapper.find('input#password').props().onChange(mockEvent);
      });
      wrapper.update();
      expect(wrapper.find('input#password').props().value)
        .toBe(mockEvent.target.value);
    });
    it('should render an error if the password is not valid', () => {
      expect(wrapper.find('p#errors').at(1)).toHaveLength(0);
      const mockEvent = { target: { value: 'mockVaxccccccc' } };
      act(() => {
        wrapper.find('input#password').props().onChange(mockEvent);
      });
      wrapper.update();
      expect(wrapper.find('p#errors').at(1)).toHaveLength(1);
    });
  });
  it('should call signUpUser with the right user data onSubmit', () => {
    const button = wrapper.find('button');
    act(() => {
      button.simulate('click');
    });
    wrapper.update();
    const expected = {
      user: {
        email: '',
        username: '',
        password: '',
      },
    };
    expect(signUpUser).toBeTruthy();
  });
});
