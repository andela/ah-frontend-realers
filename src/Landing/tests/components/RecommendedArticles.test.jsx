/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import RecommendArticles from '../../components/RecommendArticles';
import { ARTICLE_DATA } from '../../../__mock__/articleData';

describe('<RecommendArticles /> Component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<RecommendArticles recommendedArticles={ARTICLE_DATA} fetchStatus />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display error label if no article is fetched', () => {
    const wrapper = mount(<RecommendArticles recommendedArticles={ARTICLE_DATA} fetchStatus={false} />);
    wrapper.contains('No Recommendeded Articles Fetched');
  });
});
