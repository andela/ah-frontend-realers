/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import ARTICLE_DATA from '../../../../__mock__/articleData';
import { GET_ALL_ARTICLES, GETTING_FAILED, BEGIN_GETTING_ARTICLES } from '../../../redux/types';
import getallArticles from '../../../redux/actions/AllArticlesActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should start get and succeed', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/', {
      status: 200,
      response: {
        data: {
          results: ARTICLE_DATA,
        },
      },
    });

    const expectedActions = [
      {
        type: BEGIN_GETTING_ARTICLES,
      },
      {
        type: GET_ALL_ARTICLES,
        payload: ARTICLE_DATA,
      },
    ];
    const store = mockStore();
    return store.dispatch(getallArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('this triggers a failed getting action because of the error', () => {
    moxios.stubRequest('https://ah-backend-realers-staging.herokuapp.com/api/articles/', {
      status: 400,
    });

    const expectedActions = [
      {
        type: BEGIN_GETTING_ARTICLES,
      },
      {
        type: GETTING_FAILED,
        payload: {
          status: false,
          error: 400,
        },
      },
    ];
    const store = mockStore();
    return store.dispatch(getallArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
