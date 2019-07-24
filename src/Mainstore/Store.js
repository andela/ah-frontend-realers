import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import LatestArticleReducer from '../Landing/redux/reducers/latestArticlesReducer';
import signUpReducer from '../auth/signup/redux/reducer/signUpReducer';
import allArticleReducer from '../Articles/redux/reducers/allArticlesReducer';
import loginReducer from '../auth/Login/redux/reducers/loginReducer';
import resetPasswordReducer from '../auth/passwordreset/redux/reducers/postReducer';

const reducers = combineReducers({
  latest_articles: LatestArticleReducer,
  resetPassword: resetPasswordReducer,
  login: loginReducer,
  signUpUser: signUpReducer,
  allArticleReducer,

});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
  reducers, enhancers,
);
export default store;
