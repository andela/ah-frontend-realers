import axios from 'axios';
import ArticleTypes from '../types';
import ArticleUrl from '../ArticleUrl';

const ArticleAction = articleSlug => (dispatch) => {
  dispatch({
    type: ArticleTypes.IS_LOADING_ARTICLE,
  });
  return axios.get(`${ArticleUrl.ARTICLE_URL}${articleSlug}/`)
    .then((res) => {
      dispatch({
        type: ArticleTypes.GETTING_ARTICLE_SUCCESS,
        payload: res.data.data,
      });
    }).catch(() => {
      dispatch({
        type: ArticleTypes.GET_ARTICLE_FAILED,
        payload: 'Not article found',
      });
    });
};

export default ArticleAction;
