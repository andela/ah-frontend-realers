/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchArticles, mapStateToProps, mapDispatchToProps } from '../../containers/SearchArticles';
import { ARTICLE_DATA } from '../../../__mock__/articleData';
import Loading from '../../../commons/components/Loading';

const props = {
  items: ARTICLE_DATA,
  match: {
    params: {
      searchkey: 'article',
    },
  },
  isSearching: false,
  getSearchedArticles: jest.fn(),
};

describe('SearchArticles Component', () => {
  const component = shallow(<SearchArticles {...props} />);

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('getSearchedArticles is called upon mount', () => {
    const wrapper = shallow(<SearchArticles {...props} />);
    wrapper.setProps(props);
    expect(wrapper).toBeDefined();
    expect(props.getSearchedArticles).toHaveBeenCalled();
  });

  it('should display loading before retrieving articles', () => {
    const wrapper = shallow(<SearchArticles {...props} />);
    props.isSearching = true;
    wrapper.setProps(props);
    expect(wrapper.contains(<Loading />)).toBe(true);
  });

  it('should display no available message when no articles returned', () => {
    const wrapper = shallow(<SearchArticles {...props} />);
    props.items = [];
    props.isSearching = false;
    wrapper.setProps(props);
    const ErrorLabel = wrapper.find('ErrorLabel');
    expect(ErrorLabel.prop('tip')).toEqual('Try again with another word');
  });

  it('props should match the mockedstate', () => {
    const mockedState = {
      searchedArticles: {
        items: [],
        status: true,
        isSearching: false,
        message: 'Article Search Successful',
      },
    };
    const state = mapStateToProps(mockedState);
    expect(state.isSearching).toBe(false);
  });

  it('mapStateToProps should return the right value', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getSearchedArticles('hello');
    expect(dispatch).toHaveBeenCalled();
  });
});
