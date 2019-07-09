/* eslint-disable import/no-named-as-default */
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderSection from './commons/components/HeaderSection';
import FooterSection from './commons/components/FooterSection';
import Landing from './Landing/containers/Landing';

export default function App() {
  return (
    <Router>
      <HeaderSection />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={Landing} />
      </Switch>
      <FooterSection />
    </Router>
  );
}
