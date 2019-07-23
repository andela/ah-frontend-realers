import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import LatestArticleReducer from '../Landing/redux/reducers/latestArticlesReducer';
import loginReducer from '../Login/redux/reducers/loginReducer';
import signUpReducer from '../auth/signup/redux/reducer/signUpReducer';

const reducers = combineReducers({
  latest_articles: LatestArticleReducer,
  login: loginReducer,
  signUpUser: signUpReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
  reducers, enhancers,
);
export default store;
