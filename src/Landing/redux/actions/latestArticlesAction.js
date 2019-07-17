/* eslint-disable no-console */
import axios from 'axios';
import { FETCH_LATEST_POSTS, FETCH_FAILED, START_FETCHING_ARTICLES } from '../types';

export const startFetchingArticles = () => ({
  type: START_FETCHING_ARTICLES,
});

export const fetchingArticlesFail = error => ({
  type: FETCH_FAILED,
  payload: {
    status: false,
    is_fetching: false,
    error: error.response.status,
  },
});

const fetchLatestArticles = () => (dispatch) => {
  dispatch(startFetchingArticles());

  return axios.get('https://ah-backend-realers-staging.herokuapp.com/api/articles/?format=json&limit=9')
    .then(res => dispatch({
      type: FETCH_LATEST_POSTS,
      payload: res.data.results,
    }))
    .catch((error) => {
      dispatch(fetchingArticlesFail(error));
    });
};

export default fetchLatestArticles;
