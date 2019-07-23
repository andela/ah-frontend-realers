import React from "react";
// third-party libraries
import { shallow } from "enzyme";
import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// components
import FacebookButton from "../components/Facebook";
// Define a shared shallow renderer function

const fbkButton = (props = {}) => {
  const facebook = shallow(<FacebookButton {...props} />);
  return facebook;
};

describe("Facebook Login", () => {
  // Pass the value of the shallow renderer before each test
  it("should render without errors", () => {
    const wrapper = shallow(<FacebookButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should test facebook button", () => {
    const componentWrapper = shallow(<FacebookButton />);
    const response = {
      access_token: 'testToken',
    };
    componentWrapper.instance().responseFacebook(response);
  });
});
