import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import ArticleTypes from '../redux/types';
import ViewArticleAction from '../redux/Actions/ViewArticleAction';

describe('Testing ViewArticle Action', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('Testing user gets article', () => {
    const expectedArticle = {
      title: 'Logged in',
      description: 'You can close this page and return to your CLI. It should now be logged in.',
      body: 'You can close this page and return to your CLI. It should now be logged in.',
      createdAt: '2019-07-22T05:19:22.188734Z',
      updatedAt: '2019-07-22T05:19:22.188788Z',
      author: {
        email: 'alexxsanya@gmail.com',
        username: 'alexxsanya',
        bio: '',
        image: '',
        gender: 'male',
        first_name: 'Alex',
        last_name: 'Sanya',
        location: '',
        birth_date: null,
      },
      slug: 'logged-in',
      image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-realers.appspot.com/o/article-image%2Fheroku.png?alt=media&token=f9f6d723-c7d4-4df3-b4de-d1e84a5222bf',
      average_rating: 0,
      tagName: [
        'heroku',
      ],
    };
    const expectedActions = [
      {
        type: ArticleTypes.IS_LOADING_ARTICLE,
      },
      {
        type: ArticleTypes.GETTING_ARTICLE_SUCCESS,
        payload: expectedArticle.data,
      },
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedArticle,
      });
    });

    const store = mockStore({});
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    return store.dispatch(ViewArticleAction(props)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('Testing getting article fails', () => {
    const expectedArticle = {};
    const error = 'Not article found';
    const expectedActions = [
      {
        type: ArticleTypes.IS_LOADING_ARTICLE,
      },
      {
        type: ArticleTypes.GET_ARTICLE_FAILED,
        payload: error,
      },
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedArticle,
      });
    });
    const store = mockStore({});
    return store.dispatch(ViewArticleAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
