/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import postAnArticle from '../../../redux/actions/CreateArticleAction';

import { POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILED, POSTING_STARTED } from '../../../redux/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockArticleData = {
  article: {
    title: 'articleTitle',
    body: 'articleBody',
    description: 'articleBody',
    image: 'http://url.url',
  },
};

describe('', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should start fetch and end with success', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/', {
      status: 201,
      response: {
        data: {
          results: mockArticleData,
        },
      },
    });

    const expectedActions = [
      {
        type: POSTING_STARTED,
      },
      {
        type: POST_ARTICLE_SUCCESS,
        payload: {
          data: {
            results: mockArticleData,
          },
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(postAnArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should trigger failed post action in case of an error', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/', {
      status: 400,
    });

    const expectedActions = [
      {
        type: POSTING_STARTED,
      },
      {
        type: POST_ARTICLE_FAILED,
        payload: {
          errorMessage: undefined,
          errorStatus: 400,
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(postAnArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
