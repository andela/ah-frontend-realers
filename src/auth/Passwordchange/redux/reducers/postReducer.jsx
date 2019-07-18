import { CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_LOADING } from '../types';

const initialState = {
  password: '',
  ConfirmPassword: '',
  success:false,
  isLoading: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        password: payload,
        success:true,
        isLoading: false,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };
    case CHANGE_PASSWORD_LOADING:
    return {
      ...state,
      isLoading: true,
    };
    default:
      return state;
  }
}