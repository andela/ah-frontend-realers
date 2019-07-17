/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Landing, mapStateToProps } from '../../containers/Landing';
import { ARTICLE_DATA } from '../../../__mock__/articleData';

const props = {
  latestArticles: ARTICLE_DATA,
  recommendedArticles: ARTICLE_DATA,
  fetchStatus: false,
  isFetching: true,
  fetchLatestArticles: jest.fn(),
};

const fetchLatestArticlesMock = jest.fn();

describe('Landing Component', () => {
  const component = shallow(<Landing
    fetchLatestArticles={fetchLatestArticlesMock}
    latestArticles={[]}
    recommendedArticles={[]}
  />);

  it('should match the snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    const wrapper = mount(<Landing
      fetchLatestArticles={fetchLatestArticlesMock}
      latestArticles={[]}
      recommendedArticles={[]}
    />);
    wrapper.setProps(props);
    expect(wrapper).toBeDefined();
    expect(fetchLatestArticlesMock).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    const mockedState = {
      latest_articles: {
        items: ['a'],
        status: true,
        message: 'message',
        is_fetching: true,
      },
    };
    const state = mapStateToProps(mockedState);
    expect(state.fetchStatus).toBe(true);
    expect(state.isFetching).toBe(true);
  });
});
