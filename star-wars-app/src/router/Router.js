import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header/Header";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import EpisodeDetailPage from "../pages/EpisodeDetailPage/EpisodeDetailPage";
import EpisodeListPage from "../pages/EpisodeListPage/EpisodeListPage";
// import NewEpisodePage from "../pages/NewEpisodePage/NewEpisodePage";
// import NewCharacterPage from "../pages/NewCharacterPage/NewCharacterPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={EpisodeListPage} />
        <Route
          exact
          path="/episode-detail/:episodeIndex"
          component={EpisodeDetailPage}
        />
        {/* <Route exact path="/new-episode" component={NewEpisodePage} /> */}
        {/* <Route exact path="/new-character" component={NewCharacterPage} /> */}
        <Route
          exact
          path="/character-detail/:characterIndex"
          component={CharacterDetailPage}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
