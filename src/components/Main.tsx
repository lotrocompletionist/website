import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { default as Loadable } from 'react-loadable';
import { Header } from './Header';
import { Loading } from './Loading';

const Instances = Loadable({
  loader: () => import('./Instances'),
  loading: Loading
});

const Raids = Loadable({
  loader: () => import('./Raids'),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
});

export const Main = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/instances" />
        <Route exact path="/instances" component={Instances} />
        <Route exact path="/raids" component={Raids} />
        <Route component={NotFound} />
      </Switch>
    </>
  </Router>
)
