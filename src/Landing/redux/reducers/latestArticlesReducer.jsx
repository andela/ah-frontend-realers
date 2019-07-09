import { FETCH_LATEST_POSTS, FETCH_FAILED, START_FETCHING_ARTICLES } from '../types';

const initialState = {
  items: [],
  item: {},
  status: false,
  is_fetching: false,
  message: 'No Articles',
};

const LatestArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_POSTS:
      return {
        ...state,
        items: action.payload,
        status: true,
        is_fetching: false,
        message: 'Articles successfully retrieved',
      };
    case START_FETCHING_ARTICLES:
      return {
        ...state,
        is_fetching: true,
      };
    case FETCH_FAILED:
      return {
        ...state,
        message: action.payload,
        status: false,
        is_fetching: false,
      };
    default:
      return state;
  }
};

export default LatestArticleReducer;
