import axios from 'axios';
import { GET_ALL_ARTICLES, GETTING_FAILED, BEGIN_GETTING_ARTICLES } from '../types';

export const beginFetchingArticles = () => ({
  type: BEGIN_GETTING_ARTICLES,
});

export const getArticlesSuccess = response => ({
  type: GET_ALL_ARTICLES,
  payload: response.data.results,
});

export const gettingArticlesFail = error => ({
  type: GETTING_FAILED,
  payload: {
    status: false,
    error: error.response.status,
  },
});

const getAllArticles = () => (dispatch) => {
  dispatch(beginFetchingArticles());

  return axios.get('https://ah-backend-realers-staging.herokuapp.com/api/articles/')
    .then(response => dispatch(getArticlesSuccess(response)))
    .catch((error) => {
      dispatch(gettingArticlesFail(error));
    });
};

export default getAllArticles;
