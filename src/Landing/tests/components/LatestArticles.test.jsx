/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import LatestArticles from '../../components/LatestArticles';
import { ARTICLE_DATA } from '../../../__mock__/articleData';

describe('<LatestArticles /> Component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LatestArticles latestArticles={ARTICLE_DATA} fetchStatus />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display error label if no article is fetched', () => {
    const wrapper = mount(<LatestArticles latestArticles={ARTICLE_DATA} fetchStatus={false} />);
    wrapper.contains('No Latest Articles Fetched');
  });
});
