import React, { Component } from "react";

import CharacterList from "../CharacterList/CharacterList";

import "./EpisodeDetail.css";

class EpisodeDetail extends Component {
  render() {
    const { episode } = this.props;
    const { characters, title, opening_crawl, release_date } = episode;

    return (
      <div>
        <h1>{title}</h1>
        <div className="episode-detail-label-wrapper">{opening_crawl}</div>
        <div className="episode-detail-label-wrapper">{`Release date - ${release_date}`}</div>
        <div>
          <h3>Characters</h3>
          <CharacterList characterList={characters} />
        </div>
      </div>
    );
  }
}

export default EpisodeDetail;
