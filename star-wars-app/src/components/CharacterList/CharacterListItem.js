import React, { Component } from "react";
import Button from "../common/Button";

class CharacterListItem extends Component {
  render() {
    const { character } = this.props;
    const { id, name } = character;

    return (
      <div style={{ display: "flex" }}>
        <div>{name}</div>
        <Button to={`/character-detail/${id}`} label="Detail" />
      </div>
    );
  }
}

export default CharacterListItem;
