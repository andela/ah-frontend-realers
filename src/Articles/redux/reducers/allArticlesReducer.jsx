import { GET_ALL_ARTICLES, GETTING_FAILED, BEGIN_GETTING_ARTICLES } from '../types';

const initialState = {
  items: [],
  isRetrieving: false,
  message: 'Articles Not Available',
};

const allArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      return {
        ...state,
        items: action.payload,
        count: action.count,
        next: action.next,
        previous: action.previous,
        isRetrieving: false,
        message: 'All Articles fetched',

      };
    case BEGIN_GETTING_ARTICLES:
      return {
        ...state,
        isRetrieving: true,
      };
    case GETTING_FAILED:
      return {
        ...state,
        message: action.payload,
        isRetrieving: false,
      };
    default:
      return state;
  }
};

export default allArticleReducer;
