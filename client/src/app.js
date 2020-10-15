import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Public from "./components/public";

import "../style/style.scss";

// if we have a token, consider the user to be signed in

ReactDOM.render(
  <HashRouter hashType="noslash">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/public" component={Public} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
