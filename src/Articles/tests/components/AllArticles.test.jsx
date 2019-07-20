/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import {
  AllArticles,
  mapDispatchToProps,
  mapStateToProps
} from "../../components/AllArticles";
import { getAllArticles } from "../../redux/actions/AllArticlesActions";

const props = {
  getArticles: jest.fn(),
  items: [{ slug: "slug" }]
};

describe("test the component", () => {
  it("matchs the component snapshot", () => {
    const mycomponent = shallow(<AllArticles {...props} />);
    expect(mycomponent).toMatchSnapshot();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<AllArticles {...props} />);
    wrapper.setProps(props);
    expect(wrapper).toBeDefined();
  });
});

describe("test the map state to props and dispatch", () => {
  it("matches the mapstostate", () => {
    expect(
      mapStateToProps({
        allArticleReducer: { isRetrieving: false, items: [] }
      })
    ).toEqual({ isRetrieving: false, items: [] });
  });
  it("match map state to dispatch", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getArticles();
    expect(mapDispatchToProps(dispatch)).toHaveProperty("getArticles");
    expect(dispatch).toHaveBeenCalled();
  });
});
