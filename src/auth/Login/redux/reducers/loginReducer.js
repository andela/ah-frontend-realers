import loginTypes from '../types';

const initialState = {
  token: '',
  username: '',
  isloggedIn: false,
  isLoggingIn: false,
  login_errors: undefined,
  login_failed: false,
  is_logging_in: false,
  isLoading: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login_success: payload,
        isloggedIn: true,
        isLoading: false,
      };
    case loginTypes.LOGIN_ERROR:
      return {
        ...state,
        login_errors: payload.message,
        login_failed: true,
        is_logging_in: false,
        isLoading: false,
      };
    case loginTypes.IS_LOGGING_IN:
      return {
        ...state,
        is_logging_in: true,
        login_failed: false,
        isLoading: true,
      };
    case loginTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        is_logging_in: false,
        isloggedIn: false,
      };
    default:
      return state;
  }
}
