import React, { Component } from "react";

import "./CharacterDetail.css";

class CharacterDetail extends Component {
  render() {
    const { character } = this.props;
    const { eye_color, hair_color, height, mass, name, skin_color } = character;

    return (
      <div>
        <h1>{name}</h1>
        <div>{height}</div>
        <div>{mass}</div>
        <div>{skin_color}</div>
        <div>{eye_color}</div>
        <div>{hair_color}</div>
      </div>
    );
  }
}

export default CharacterDetail;
