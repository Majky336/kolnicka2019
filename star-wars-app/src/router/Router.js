import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header/Header";
import DetailPage from "../pages/DetailPage";
import ListPage from "../pages/ListPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
