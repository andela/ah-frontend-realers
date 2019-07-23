import loginTypes from '../redux/types';
import loginReducer from '../redux/reducers/loginReducer';

const initialState = {
  token: '',
  username: '',
  isloggedIn: false,
  isLoggingIn: false,
  login_errors: undefined,
  login_failed: true,
  is_logging_in: false,
  isLoading: false,
};

describe('Test for Login reducer', () => {
  it('should successfully login', () => {
    const dispatchedAction = {
      type: loginTypes.LOGIN_SUCCESS,
      payload: {
        username: 'zalwango',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGc',
        email: 'jennyzalwango12@gmail.com',
      },
    };
    const newState = {
      ...initialState,
      login_success: {
        username: 'zalwango',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGc',
        email: 'jennyzalwango12@gmail.com',
      },
      isloggedIn: true,
    };
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it('should unsuccessfully login', () => {
    const dispatchedAction = {
      type: loginTypes.LOGIN_ERROR,
      payload: {
        res: {
          errors: {
            isLoggingIn: false,
            isloggedIn: false,
          },
        },
      },
    };
    const newState = {
      ...initialState,
      isLoggingIn: false,
      isloggedIn: false,

    };
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it('test is logging in', () => {
    const dispatchedAction = {
      type: loginTypes.IS_LOGGING_IN,
    };
    const newState = {
      ...initialState,
      is_logging_in: true,
      login_failed: false,
      isLoading: true,

    };
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });
});
