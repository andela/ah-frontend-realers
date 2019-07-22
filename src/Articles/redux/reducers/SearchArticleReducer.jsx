import { SEARCH_ARTICLE_SUCCESS, SEARCH_ARTICLE_FAILED, START_SEARCHING_ARTICLES } from '../types';

const initialState = { };

const SearchArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLE_SUCCESS:
      return {
        ...state,
        items: action.payload,
        status: true,
        isSearching: false,
        message: 'Article Search Successful',
      };
    case START_SEARCHING_ARTICLES:
      return {
        ...state,
        isSearching: true,
      };
    case SEARCH_ARTICLE_FAILED:
      return {
        ...state,
        message: action.payload,
        status: false,
        isSearching: false,
      };
    default:
      return state;
  }
};

export default SearchArticleReducer;
