/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import fetchSearchedArticles from '../../../redux/actions/SearchArticlesAction';
import { SEARCH_ARTICLE_SUCCESS, SEARCH_ARTICLE_FAILED, START_SEARCHING_ARTICLES } from '../../../redux/types';
import ARTICLE_DATA from '../../../../__mock__/articleData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SearchArticles Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('should start search an article with success', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/?search=articleTitle', {
      status: 200,
      response: {
        data: {
          results: ARTICLE_DATA,
        },
      },
    });

    const expectedActions = [
      {
        type: START_SEARCHING_ARTICLES,
      },
      {
        type: SEARCH_ARTICLE_SUCCESS,
        payload: ARTICLE_DATA,
      },
    ];
    const store = mockStore();
    return store.dispatch(fetchSearchedArticles('articleTitle')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should trigger failed search action in case of an error', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/?search=articleTitle', {
      status: 400,
    });

    const expectedActions = [
      {
        type: START_SEARCHING_ARTICLES,
      },
      {
        type: SEARCH_ARTICLE_FAILED,
        payload: {
          error: 400,
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(fetchSearchedArticles('articleTitle')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
