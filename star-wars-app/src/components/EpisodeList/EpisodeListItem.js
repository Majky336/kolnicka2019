import React, { Component } from "react";

import "./EpisodeListItem.css";
import Button from "../common/Button";

class EpisodeListItem extends Component {
  render() {
    const { episode } = this.props;
    const { id, title, producer, director, release_date } = episode || {};

    return (
      <div className="list-item-wrapper">
        <div className="list-item-title">{title}</div>
        <div className="list-item-label">{producer}</div>
        <div className="list-item-label">{director}</div>
        <div className="list-item-label">{release_date}</div>
        <div className="list-item-button-wrapper">
          <Button label="Detail of episode" to={`episode-detail/${id}`} />
        </div>
      </div>
    );
  }
}

export default EpisodeListItem;
