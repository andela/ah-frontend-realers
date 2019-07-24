import React from 'react';
import { mount } from 'enzyme';
import ResetForm from '../components/ResetForm';

const mockProps = {
  request_success: true,
  handleSubmit: jest.fn(),
  request_errors: {},
  isLoading: false,
  onChange: jest.fn(),
  email: 'h@me.com',
  errors: {
      userEmail: 'User Email Error',
  },
}

const requestError = 'No account with that email';
const requestSuccess = 'Success! Check your email for a reset link.';

describe('ResetComponent', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<ResetForm {...mockProps} />)
    });
    it('should render without crushing', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
    it('should render the email input', () => {
      expect(wrapper.find('input#UserEmail')).toHaveLength(1);
    });
    describe('Email Input', () => {
        let emailInput;
        beforeEach(() => {
            emailInput = wrapper.find('input#UserEmail');
        });
        it('should have its value property set to the wrapper\'s email prop', () => {
            expect(emailInput.props().value).toBe(mockProps.email);
        });
        it('should have its onChange property set to the wrapper\'s onChange prop', () => {
            expect(emailInput.props().onChange).toBe(mockProps.onChange);
        });
        it('should have its required property set to true by default', () => {
            expect(emailInput.props().required).toBe(true);
        });
    });
    it('should render the user email error if exists', () => {
        expect(wrapper.text()).toContain(mockProps.errors.userEmail);
    });
    it(`should render the text "${requestError}" if the wrapper's errors.request_errors is truthy`, () => {
        expect(wrapper.text()).toContain(requestError);
    });
    it(`should render the text "${requestSuccess}" if the wrapper's errors.request_success is truthy`, () => {
        expect(wrapper.text()).toContain(requestSuccess);
    });
    it('should render the button component whose onClick property is the wrapper\'s handleSubmit prop', () => {
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').props().onClick).toBe(mockProps.handleSubmit);
      });
});