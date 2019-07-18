import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import LatestArticleReducer from '../Landing/redux/reducers/latestArticlesReducer';
import changePasswordReducer from '../auth/Passwordchange/redux/reducers/postReducer';

const reducers = combineReducers({
  latest_articles: LatestArticleReducer,
  changePassword: changePasswordReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
  reducers, enhancers,
);

export default store;
