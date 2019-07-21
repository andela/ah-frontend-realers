import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HeaderSection from './commons/components/HeaderSection';
import FooterSection from './commons/components/FooterSection';
import Landing from './Landing/containers/Landing';
import LoginContainer from './Login/containers/LoginContainer';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Router>
      <HeaderSection />
      <ToastContainer />
      <Route path="/login" exact component={LoginContainer} />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={Landing} />
      </Switch>
      <FooterSection />
    </Router>
  );
}
