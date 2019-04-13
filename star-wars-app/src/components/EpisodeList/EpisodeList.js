import React, { Component } from "react";

import EpisodeListItem from "./EpisodeListItem";
import "./EpisodeList.css";

class EpisodeList extends Component {
  render() {
    const { episodeList, history } = this.props;

    return (
      <div className="episode-list-section">
        {episodeList.map(episode => {
          const { id } = episode || {};

          return (
            <EpisodeListItem key={id} episode={episode} history={history} />
          );
        })}
      </div>
    );
  }
}

export default EpisodeList;
