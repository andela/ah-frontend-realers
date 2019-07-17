/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Article from '../../components/Article';

function renderArticleComponent(args) {
  const defaultProps = {
    article: {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<Article article={props} />);
}

describe('Article Component', () => {
  it('should match the snapshot', () => {
    const component = renderArticleComponent();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('article should have the title passed to it  ', () => {
    const component = renderArticleComponent({
      title: 'i am who I am',
      image: 'http://url.img',
      createsAt: '',
      author: {
        username: 'alexxsanya',
      },
    });
    expect(component.find('CardTitle').text()).toEqual('i am who I am');
  });
});
