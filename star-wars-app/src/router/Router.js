import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header/Header";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import EpisodeDetailPage from "../pages/EpisodeDetailPage/EpisodeDetailPage";
import EpisodeListPage from "../pages/EpisodeListPage/EpisodeListPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={EpisodeListPage} />
        <Route exact path="/episode-detail" component={EpisodeDetailPage} />
        <Route exact path="/character-detail" component={CharacterDetailPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
