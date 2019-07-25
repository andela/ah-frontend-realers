import { POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILED, POSTING_STARTED } from '../types';

const initialState = {};

const CreateArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ARTICLE_SUCCESS:
      return {
        ...state,
        item: action.payload,
        status: true,
        isPosting: false,
        message: 'Articles successfully created',
      };
    case POSTING_STARTED:
      return {
        ...state,
        isPosting: true,
      };
    case POST_ARTICLE_FAILED:
      return {
        ...state,
        error: action.payload,
        status: false,
        isPosting: false,
      };
    default:
      return state;
  }
};

export default CreateArticleReducer;
