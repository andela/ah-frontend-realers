import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import loginTypes from '../redux/types';
import loginAction from '../redux/actions/LoginAction';

describe('Testing Auth Action', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('Testing User authentication success', () => {
    const expectedResponse = {
      user: {
        username: 'zalwango',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGc',
        email: 'jennyzalwango12@gmail.com',
      },
    };

    const expectedActions = [
      {
        type: loginTypes.IS_LOGGING_IN,
      },
      {
        type: loginTypes.LOGIN_SUCCESS,
        payload: expectedResponse.user,
      },
    ];

    const userData = {
      user: {
        email: 'jennyzalwango12@gmail.com',
        password: 'password',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    return store.dispatch(loginAction(userData, props)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Testing User authentication failure', () => {
    const expectedResponse = {
      user: {
        is_logging_in: false,
        login_failed: true,
      },
    };
    const expectedActions = [
      {
        type: loginTypes.IS_LOGGING_IN,
      },
      {
        type: loginTypes.LOGIN_ERROR,
      },
    ];
    const userData = {
      user: {
        email: 'jameszalwango12@gmail.com',
        password: 'password1',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    return store.dispatch(loginAction(userData)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions[0]);
    });
  });
});
