/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
// import fetchMock from 'fetch-mock';
import fetchLatestArticlesAction from '../../../redux/actions/latestArticlesAction';
import ARTICLE_DATA from '../../../../__mock__/articleData';
import { FETCH_LATEST_POSTS, FETCH_FAILED, START_FETCHING_ARTICLES } from '../../../redux/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should start fetch and end with success', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/?format=json&limit=9', {
      status: 200,
      response: {
        data: {
          results: ARTICLE_DATA,
        },
      },
    });

    const expectedActions = [
      {
        type: START_FETCHING_ARTICLES,
      },
      {
        type: FETCH_LATEST_POSTS,
        payload: ARTICLE_DATA,
      },
    ];
    const store = mockStore();
    return store.dispatch(fetchLatestArticlesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should trigger failed fetch action in case of an error', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/?format=json&limit=9', {
      status: 400,
    });

    const expectedActions = [
      {
        type: START_FETCHING_ARTICLES,
      },
      {
        type: FETCH_FAILED,
        payload: {
          status: false,
          is_fetching: false,
          error: 400,
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(fetchLatestArticlesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
