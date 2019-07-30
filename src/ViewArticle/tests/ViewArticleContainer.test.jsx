import React from 'react';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import ArticleContainer, { ArticleContainer as ArticleContainerTest } from '../container/ViewArticleContainer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  ViewArticlereducer: {
    singleArticle: {},
    isLoadingArticle: false,
  },
};
const store = mockStore(initialState);
describe('should call ViewArticleComponent', () => {
  const props = {
    getSingleArticle: jest.fn(),
    match: { params: { slug: 'slug' } },
  };
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ArticleContainer {...props} />
      </Provider>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('ComponentDidMount', () => {
    shallow(
      <ArticleContainerTest {...props} />,
    );

    expect(props.getSingleArticle).toHaveBeenCalled();
    const slug = props.getSingleArticle.mock.calls[0][0];
    expect(slug).toBe('slug');
  });
});
