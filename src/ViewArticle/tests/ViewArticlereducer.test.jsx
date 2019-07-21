import ViewArticleReducer from '../redux/reducers/ViewArticlereducer';
import ArticleTypes from '../redux/types';

describe('test for viewArticle reducer', () => {
  it('Testing get single article success', () => {
    const article = {
      title: 'Logged in',
      description: 'You can close this page and return to your CLI. It should now be logged in.',
      body: 'You can close this page and return to your CLI. It should now be logged in.',
      createdAt: '2019-07-22T05:19:22.188734Z',
      updatedAt: '2019-07-22T05:19:22.188788Z',
      author: {
        email: 'alexxsanya@gmail.com',
        username: 'alexxsanya',
        bio: '',
        image: '',
        gender: 'male',
        first_name: 'Alex',
        last_name: 'Sanya',
        location: '',
        birth_date: null,
      },
      slug: 'logged-in',
      image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-realers.appspot.com/o/article-image%2Fheroku.png?alt=media&token=f9f6d723-c7d4-4df3-b4de-d1e84a5222bf',
      average_rating: 0,
      tagName: [
        'heroku',
      ],
    };
    const expectedResponse = {
      isLoadingArticle: false,
      singleArticle: {
        author: {
          bio: '', birth_date: null, email: 'alexxsanya@gmail.com', first_name: 'Alex', gender: 'male', image: '', last_name: 'Sanya', location: '', username: 'alexxsanya',
        },
        average_rating: 0,
        body: 'You can close this page and return to your CLI. It should now be logged in.',
        createdAt: '2019-07-22T05:19:22.188734Z',
        description: 'You can close this page and return to your CLI. It should now be logged in.',
        image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-realers.appspot.com/o/article-image%2Fheroku.png?alt=media&token=f9f6d723-c7d4-4df3-b4de-d1e84a5222bf',
        slug: 'logged-in',
        tagName: ['heroku'],
        title: 'Logged in',
        updatedAt: '2019-07-22T05:19:22.188788Z',
      },
    };
    const initialState = {
      singleArticle: {},
      isLoadingArticle: false,
    };
    const action = {
      type: ArticleTypes.GETTING_ARTICLE_SUCCESS,
      payload: article,
    };

    const newState = ViewArticleReducer(initialState, action);
    expect(newState).toEqual(expectedResponse);
  });
  it('test get article failed', () => {
    const article = {
      title: 'Logged in',
      description: 'You can close this page and return to your CLI. It should now be logged in.',
      body: 'You can close this page and return to your CLI. It should now be logged in.',
      createdAt: '2019-07-22T05:19:22.188734Z',
      updatedAt: '2019-07-22T05:19:22.188788Z',
      author: {
        email: 'alexxsanya@gmail.com',
        username: 'alexxsanya',
        bio: '',
        image: '',
        gender: 'male',
        first_name: 'Alex',
        last_name: 'Sanya',
        location: '',
        birth_date: null,
      },
      slug: 'logged-in',
      image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-realers.appspot.com/o/article-image%2Fheroku.png?alt=media&token=f9f6d723-c7d4-4df3-b4de-d1e84a5222bf',
      average_rating: 0,
      tagName: [
        'heroku',
      ],
    };
    const expectedResponse = {
      isLoadingArticle: false,
      singleArticle: {},
    };
    const initialState = {
      singleArticle: {},
      isLoadingArticle: false,
    };
    const action = {
      type: ArticleTypes.GET_ARTICLE_FAILED,
      payload: article,
    };

    const newState = ViewArticleReducer(initialState, action);
    expect(newState).toEqual(expectedResponse);
  });
  it('test for is_loading_article', () => {
    const article = {
      title: 'Logged in',
      description: 'You can close this page and return to your CLI. It should now be logged in.',
      body: 'You can close this page and return to your CLI. It should now be logged in.',
      createdAt: '2019-07-22T05:19:22.188734Z',
      updatedAt: '2019-07-22T05:19:22.188788Z',
      author: {
        email: 'alexxsanya@gmail.com',
        username: 'alexxsanya',
        bio: '',
        image: '',
        gender: 'male',
        first_name: 'Alex',
        last_name: 'Sanya',
        location: '',
        birth_date: null,
      },
      slug: 'logged-in',
      image: 'https://firebasestorage.googleapis.com/v0/b/ah-frontend-realers.appspot.com/o/article-image%2Fheroku.png?alt=media&token=f9f6d723-c7d4-4df3-b4de-d1e84a5222bf',
      average_rating: 0,
      tagName: [
        'heroku',
      ],
    };
    const expectedResponse = {
      isLoadingArticle: true,
      singleArticle: {},
    };
    const initialState = {
      singleArticle: {},
      isLoadingArticle: false,
    };
    const action = {
      type: ArticleTypes.IS_LOADING_ARTICLE,
      payload: article,
    };

    const newState = ViewArticleReducer(initialState, action);
    expect(newState).toEqual(expectedResponse);
  });
});
