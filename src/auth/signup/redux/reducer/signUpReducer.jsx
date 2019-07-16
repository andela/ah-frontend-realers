import { SIGNUP_USER_SUCCESS, SIGNUP_USER_START, SIGNUP_USER_FAILURE } from '../types';

const initialState = {
  responseData: '',
  isLoading: false,
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        responseData: action.payload,
        isLoading: false,
      };
    case SIGNUP_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
      };
    default:
      return state;
  }
}
