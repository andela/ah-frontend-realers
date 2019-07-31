import { PROFILE_LOADING, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../types';

const initialState = {
  profile: {},
  isLoading: false,
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
      };
    case PROFILE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
      };
    default:
      return state;
  }
}
