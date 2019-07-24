import React from 'react';
import { mount } from 'enzyme';
import ResetForm from '../components/ResetForm';
import ResetComponent from '../components/ResetComponent';
import ResetStrings from '../constants';

jest.mock('../containers/withPasswordState', () => C => p => <C {...p} />)
jest.mock('../components/ResetForm', () => () => <div />)

const mockProps = {
  request_success: true,
  resetPasswordAction: jest.fn(),
  request_errors: {},
  isLoading: true,
  history: {},
}

describe('ResetComponent', () => {
 let wrapper;
 beforeEach(() => {
   wrapper = mount(<ResetComponent {...mockProps} />)
 });
 it('should render without crushing', () => {
   expect(wrapper.exists()).toBeTruthy();
 });
 it('should render the ResetForm component', () => {
   expect(wrapper.find(ResetForm)).toHaveLength(1);
 });
 describe('ResetForm', () => {
   let resetForm;
   beforeEach(() => {
     resetForm = wrapper.find(ResetForm);
   });
   it('should have its email prop set to an empty string by default', () => {
     expect(resetForm.props().email).toBe('');
   });
   it('should have its email prop set to an empty plain javascript object by default', () => {
    expect(resetForm.props().errors).toMatchObject({});
   });
   it('should have its request_success prop set to the wrapper\'s request_success prop', () => {
     expect(resetForm.props().request_success).toBe(mockProps.request_success);
   });
   it('should have its request_errors prop set to the wrapper\'s request_errors prop', () => {
    expect(resetForm.props().request_errors).toBe(mockProps.request_errors);
  });
  it('should have its isLoading prop set to the wrapper\'s isLoading prop', () => {
    expect(resetForm.props().isLoading).toBe(mockProps.isLoading);
  });
  it('should update the email prop with the new email value onChange', () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'some-new-email',
      }
    }
    resetForm.props().onChange(mockEvent);
    wrapper.update();
    expect(wrapper.find(ResetForm).props().email).toBe(mockEvent.target.value);
  });
  it('should call event preventDefault on handleSubmit', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    }
    resetForm.props().handleSubmit(mockEvent);
    wrapper.update();
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
  it(`should set the errors.userEmail prop to  ${ResetStrings.EMPTY_EMAIL_ERROR} on handleSubmit if the new email value is empty`, () => {
    const mockEvent = {
      target: {
        value: '',
      }
    }
    resetForm.props().onChange(mockEvent);
    wrapper.update();
    const mockSubmitEvent = {
      preventDefault: jest.fn(),
    }
    resetForm.props().handleSubmit(mockSubmitEvent);
    wrapper.update();
    expect(wrapper.find(ResetForm).props().errors.userEmail).toBe(ResetStrings.EMPTY_EMAIL_ERROR);
  });
  it(`should set the errors.userEmail prop to  ${ResetStrings.INVALID_EMAIL_ERROR} on handleSubmit if the new email value is not valid`, () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'www.google.com',
      }
    }
    resetForm.props().onChange(mockEvent);
    wrapper.update();
    const mockSubmitEvent = {
      preventDefault: jest.fn(),
    }
    resetForm.props().handleSubmit(mockSubmitEvent);
    wrapper.update();
    expect(wrapper.find(ResetForm).props().errors.userEmail).toBe(ResetStrings.INVALID_EMAIL_ERROR);
  });
  it(`should call the wrapper\'s resetPasswordAction prop with the right user data and the wrapper\'s props.history`, () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'h@me.com',
      }
    }
    resetForm.props().onChange(mockEvent);
    wrapper.update();
    const mockSubmitEvent = {
      preventDefault: jest.fn(),
    }
    wrapper.find(ResetForm).props().handleSubmit(mockSubmitEvent);
    wrapper.update();
    const expectedUserData = {
      email: mockEvent.target.value,
    };
    expect(mockProps.resetPasswordAction).toHaveBeenCalledWith(expectedUserData, wrapper.props().history);
  });
 });
});

