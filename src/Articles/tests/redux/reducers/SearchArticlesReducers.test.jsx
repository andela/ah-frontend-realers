import SearchArticleReducer from '../../../redux/reducers/SearchArticleReducer';
import { SEARCH_ARTICLE_SUCCESS, SEARCH_ARTICLE_FAILED, START_SEARCHING_ARTICLES } from '../../../redux/types';

const initialState = {};

const searchAction = {
  type: SEARCH_ARTICLE_SUCCESS,
  payload: [{ articles: ['1'] }],
  message: 'Articles successfully retrieved',
  status: true,
  isSearching: true,
};

const searchFailedAction = {
  type: SEARCH_ARTICLE_FAILED,
  message: undefined,
  items: [],
  status: false,
  isSearching: false,
};

const startFetchingAction = {
  type: START_SEARCHING_ARTICLES,
};

describe('SearchArticleReducer initial state', () => {
  it('should return the initial state', () => {
    expect(SearchArticleReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle SEARCH_ARTICLE_SUCCESS', () => {
    expect(SearchArticleReducer(initialState, searchAction)).toEqual({
      items: [{ articles: ['1'] }],
      message: 'Article Search Successful',
      status: true,
      isSearching: false,
    });
  });

  it('should handle SEARCH_ARTICLE_FAILED', () => {
    expect(SearchArticleReducer(initialState, searchFailedAction)).toEqual({
      isSearching: false,
      message: undefined,
      status: false,
    });
  });

  it('should handle START_SEARCHING_ARTICLES', () => {
    expect(SearchArticleReducer(initialState, startFetchingAction)).toEqual({
      isSearching: true,
    });
  });
});
