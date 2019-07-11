import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, RESET_PASSWORD_LOADING } from '../types';

const initialState = {
  email: '',
  errors: '',
  success: false,
  isLoading: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        email: payload,
        success: true,
        isLoading: false,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };
    case RESET_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
