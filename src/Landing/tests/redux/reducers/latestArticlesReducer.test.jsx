/* eslint-disable no-undef */
import LatestArticleReducer from '../../../redux/reducers/latestArticlesReducer';
import { FETCH_LATEST_POSTS, FETCH_FAILED, START_FETCHING_ARTICLES } from '../../../redux/types';

const initialState = {
  items: [],
  item: {},
  message: 'No Articles',
  status: false,
  is_fetching: false,
};

const fetchAction = {
  type: FETCH_LATEST_POSTS,
  payload: [{ articles: ['1'] }],
  message: 'Articles successfully retrieved',
  status: true,
  is_fetching: true,
};

const fetchFailedAction = {
  type: FETCH_FAILED,
  message: undefined,
  items: [],
  status: false,
  is_fetching: false,
};

const startFetchingAction = {
  type: START_FETCHING_ARTICLES,
};

describe('LatestArticleReducer initial state', () => {
  it('should return the initial state', () => {
    expect(LatestArticleReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle FETCH_LATEST_POSTS', () => {
    expect(LatestArticleReducer(initialState, fetchAction)).toEqual({
      item: {},
      items: [{ articles: ['1'] }],
      message: 'Articles successfully retrieved',
      status: true,
      is_fetching: false,
    });
  });

  it('should handle FETCH_FAILED', () => {
    expect(LatestArticleReducer(initialState, fetchFailedAction)).toEqual({
      item: {},
      items: [],
      message: undefined,
      status: false,
      is_fetching: false,
    });
  });

  it('should handle START_FETCHING_ARTICLES', () => {
    expect(LatestArticleReducer(initialState, startFetchingAction)).toEqual({
      is_fetching: true,
      item: {},
      items: [],
      message: 'No Articles',
      status: false,
    });
  });
});
