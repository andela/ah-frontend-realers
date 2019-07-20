// import allArticleReducer from '../../redux/reducers/allArticlesReducer';
import { GET_ALL_ARTICLES, GETTING_FAILED, BEGIN_GETTING_ARTICLES } from '../../../redux/types';
import allArticleReducer from '../../../redux/reducers/allArticlesReducer';

describe('Test allArticle reducer', () => {
    
    it ('ought to return initial state', () => {
        expect (allArticleReducer(undefined, {})).toEqual({
            items: [],
            isRetrieving: false,
            message: 'Articles Not Available',
        });
    });

    it ('ought to get all articles', () => {
        expect (allArticleReducer(
            undefined,
            {
              type: GET_ALL_ARTICLES,
              payload: [{}, {}]
            })).toEqual({
            items: [{}, {}],
            isRetrieving: false,
            message: 'All Articles fetched',
        });
    });

    it ('ought begin getting articles', () => {
        expect (allArticleReducer(
            undefined,
            {
              type: BEGIN_GETTING_ARTICLES,
            })).toEqual({
            isRetrieving: true,
            items: [],
            message: 'Articles Not Available',
        });
    });

    it ('ought begin getting articles', () => {
        expect (allArticleReducer(
            undefined,
            {
              type: GETTING_FAILED,
              payload: {
                  status: false,
                  error: 'error'
              },
            })).toEqual({
            isRetrieving: false,
            items: [],
            message: {
                status: false,
                error: 'error'
            }
            
        });
    });
});
