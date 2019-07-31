import { EDIT_PROFILE_SUCCESS, EDIT_PROFILE_START, EDIT_PROFILE_FAILURE } from '../types';

const initialState = {
  responseData: {},
  isLoading: false,
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        responseData: action.payload,
        isLoadong: false,
      };
    case EDIT_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
      };
    default:
      return state;
  }
}
