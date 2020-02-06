import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Song from "./Song/Song";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/song/:id" component={Song} />
    </Switch>
  </BrowserRouter>
);

export default Router;
