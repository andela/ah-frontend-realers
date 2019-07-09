import React from 'react';
// third-party libraries
import {
    shallow
} from 'enzyme';
// components
import GoogleButton from '../components/Google';
// Define a shared shallow renderer function

describe('Google Login', () => {
  // Pass the value of the shallow renderer before each test
  it('should render without errors', () => {
    const wrapper = shallow( <GoogleButton / > );
    expect(wrapper).toMatchSnapshot();
  });

  it("should test google button", () => {
    const componentWrapper = shallow(<GoogleButton />);
    const response = {
      access_token: {"Zi":'testToken'},
    };
    componentWrapper.instance().responseGoogle(response.access_token);
  });
});
