import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import withContainer from '../containers/withPasswordState';

const mockResetPasswdState = {
    success: false,
    errors: {},
    isLoading: false,
}

const storeItems = {
    resetPassword: mockResetPasswdState
};
const mockStore = configureStore([thunk]);
const store = mockStore(storeItems);
store.dispatch = jest.fn();

const TestComponent = () => <div />;
const ContainedComponent = withContainer(TestComponent);

describe('withContainer', () => {
    let wrapper;
    let testComponent
    beforeEach(() => {
        wrapper = mount(
        <Provider store={store}>
            <ContainedComponent />
        </Provider>,
        );
        testComponent = wrapper.find(TestComponent);
    });
    it('should render without crushing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
    it('should set the Child components request_success prop to the stores resetPassword.success prop', () => {
        expect(testComponent.props().request_success).toBe(mockResetPasswdState.success);
    });
    it('should set the Child components request_errors prop to the stores resetPassword.errors prop', () => {
        expect(testComponent.props().request_errors).toBe(mockResetPasswdState.errors);
    });
    it('should set the Child components isLoading prop to the stores resetPassword.isLoading prop', () => {
        expect(testComponent.props().isLoading).toBe(mockResetPasswdState.isLoading);
    });
});