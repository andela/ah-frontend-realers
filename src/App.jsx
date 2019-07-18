/* eslint-disable import/no-named-as-default */
import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HeaderSection from './commons/components/HeaderSection';
import FooterSection from './commons/components/FooterSection';
import Landing from './Landing/containers/Landing';
import LoginContainer from './auth/Login/containers/LoginContainer';
import Search from './Articles/containers/SearchArticles';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './auth/signup/components/SignUp';
import AllArticles from './Articles/components/AllArticles';
import ResetPasswordContainer from './auth/passwordreset/components/ResetComponent';
import ChangePasswordContainer from './auth/Passwordchange/containers/ChangePasswordContainer';
import store from './Mainstore/Store';
import history from './commons/history';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <HeaderSection />
        <ToastContainer />
        <Route path="/login" exact component={LoginContainer} />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/articles" component={AllArticles} />
          <Route path="/reset" component={ResetPasswordContainer} />
          <Route path="/search/:searchkey" exact component={Search} />
          <Route path="/change" component={ChangePasswordContainer} />
        </Switch>
        <FooterSection />
      </Router>
    </Provider>
  );
}
