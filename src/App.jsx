/* eslint-disable import/no-named-as-default */
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderSection from './commons/components/HeaderSection';
import FooterSection from './commons/components/FooterSection';
import Landing from './Landing/containers/Landing';
import ChangePasswordContainer from './auth/Passwordchange/containers/ChangePasswordContainer';

export default function App() {
  return (
    <Router>
      <HeaderSection />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={Landing} />
        <Route path="/change" component={ChangePasswordContainer} />
      </Switch>
      <FooterSection />
    </Router>
  );
}
