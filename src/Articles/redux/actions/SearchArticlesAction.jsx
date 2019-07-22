/* eslint-disable no-console */
import axios from 'axios';
import { SEARCH_ARTICLE_SUCCESS, SEARCH_ARTICLE_FAILED, START_SEARCHING_ARTICLES } from '../types';

export const startSearchingArticles = () => ({
  type: START_SEARCHING_ARTICLES,
});

export const searchingArticlesFail = error => ({
  type: SEARCH_ARTICLE_FAILED,
  payload: {
    error: error.response.status,
  },
});

const fetchSearchedArticles = (searchKey) => (dispatch) => {
  dispatch(startSearchingArticles());

  return axios.get(`https://ah-backend-realers-staging.herokuapp.com/api/articles/?search=${searchKey}`)
    .then(res => dispatch({
      type: SEARCH_ARTICLE_SUCCESS,
      payload: res.data.results,
    }))
    .catch((error) => {
      dispatch(searchingArticlesFail(error));
    });
};

export default fetchSearchedArticles;
