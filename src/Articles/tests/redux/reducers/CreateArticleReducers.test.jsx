/* eslint-disable no-undef */
import CreateArticleReducer from '../../../redux/reducers/CreateArticleReducer';
import { POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILED, POSTING_STARTED } from '../../../redux/types';

const initialState = {};

const postArticle = {
  type: POST_ARTICLE_SUCCESS,
  items: 'action.payload',
  status: true,
  isPosting: false,
  message: 'Articles successfully created',
};

const postArticleFailedAction = {
  type: POST_ARTICLE_FAILED,
  error: 'action.payload',
  status: false,
  isPosting: false,
};

const startFetchingAction = {
  type: POSTING_STARTED,
};

describe('CreateArticleReducer initial state', () => {
  it('should return the initial state', () => {
    expect(CreateArticleReducer(undefined, {})).toEqual(
      initialState,
    );
  });

  it('should handle POST_ARTICLE_SUCCESS', () => {
    expect(CreateArticleReducer(initialState, postArticle)).toEqual({
      isPosting: false,
      items: undefined,
      message: 'Articles successfully created',
      status: true,
    });
  });

  it('should handle POST_ARTICLE_FAILED', () => {
    expect(CreateArticleReducer(initialState, postArticleFailedAction)).toEqual({
      status: false,
      isPosting: false,
    });
  });

  it('should handle POSTING_STARTED', () => {
    expect(CreateArticleReducer(initialState, startFetchingAction)).toEqual({
      isPosting: true,
    });
  });
});
