/* eslint-disable no-console */
import axios from 'axios';
import { POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILED, POSTING_STARTED } from '../types';
import setAuthorizationToken from '../../../commons/Util/SetAuthToken';

export const startPostingArticle = () => ({
  type: POSTING_STARTED,
});

export const createArticleFail = error => ({
  type: POST_ARTICLE_FAILED,
  payload: {
    errorMessage: error.response.data,
    errorStatus: error.response.status,
  },
});

const postAnArticle = articleData => (dispatch) => {
  dispatch(startPostingArticle());

  setAuthorizationToken();

  return axios.post(
    'https://ah-backend-realers-staging.herokuapp.com/api/articles/',
    articleData,
  )
    .then(res => dispatch({
      type: POST_ARTICLE_SUCCESS,
      payload: res.data,
    }))
    .catch((error) => {
      dispatch(createArticleFail(error));
    });
};

export default postAnArticle;
