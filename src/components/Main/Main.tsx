import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import * as Loadable from "react-loadable";
import { Header } from "../Header/Header";
import { Loading } from "../Loading/Loading";

const Instances = Loadable({
  loader: () => import("../Instances/Instances"),
  loading: Loading
});

const Raids = Loadable({
  loader: () => import("../Raids/Raids"),
  loading: Loading
});

const Skirmishes = Loadable({
  loader: () => import("../Skirmishes/Skirmishes"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("../NotFound/NotFound"),
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
        <Route exact path="/skirmishes" component={Skirmishes} />
        <Route component={NotFound} />
      </Switch>
    </>
  </Router>
);
