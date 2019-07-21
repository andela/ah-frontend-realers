import ArticleTypes from '../types';

const initialState = {
  singleArticle: {},
  isLoadingArticle: false,
};
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ArticleTypes.GETTING_ARTICLE_SUCCESS:
      return {
        ...state,
        singleArticle: payload,
        isLoadingArticle: false,
      };
    case ArticleTypes.GET_ARTICLE_FAILED:
      return {
        ...state,
        article_errors: payload.message,
        isLoadingArticle: false,
      };
    case ArticleTypes.IS_LOADING_ARTICLE:
      return {
        ...state,
        isLoadingArticle: true,
      };
    default:
      return state;
  }
}
