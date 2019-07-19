import React from 'react';
// third-party libraries
import {
   shallow
} from 'enzyme';
// components
import { ChangePasswordContainer } from '../containers/ChangePasswordContainer';
// Define a shared shallow renderer function

const changeButton = (props = {}) => {
 const changePassword = shallow( < ChangePasswordContainer {...props}/>);
   return changePassword;
 };

describe('Password Change', () => {
 // Pass the value of the shallow renderer before each test
 it('should render without errors', () => {
   const wrapper = shallow( <ChangePasswordContainer /> );
   expect(wrapper).toMatchSnapshot();
 });
});