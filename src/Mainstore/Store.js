import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import LatestArticleReducer from '../Landing/redux/reducers/latestArticlesReducer';
import ViewArticlereducer from '../ViewArticle/redux/reducers/ViewArticlereducer';
import signUpReducer from '../auth/signup/redux/reducer/signUpReducer';
import allArticleReducer from '../Articles/redux/reducers/allArticlesReducer';
import loginReducer from '../auth/Login/redux/reducers/loginReducer';
import resetPasswordReducer from '../auth/passwordreset/redux/reducers/postReducer';
import SearchArticleReducer from '../Articles/redux/reducers/SearchArticleReducer';
import CreateArticleReducer from '../Articles/redux/reducers/CreateArticleReducer';
import userProfileReducer from '../Profiles/redux/reducers/UserProfileReducer';
import editProfileReducer from '../Profiles/redux/reducers/EditProfileReducer';

const reducers = combineReducers({
  latest_articles: LatestArticleReducer,
  createArticle: CreateArticleReducer,
  login: loginReducer,
  signUpUser: signUpReducer,
  allArticleReducer,
  searchedArticles: SearchArticleReducer,
  resetPassword: resetPasswordReducer,
  viewAnArtricle: ViewArticlereducer,
  userProfiles: userProfileReducer,
  editProfile: editProfileReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
  reducers, enhancers,
);
export default store;
