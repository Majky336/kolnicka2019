import React, { Component } from "react";
import CharacterListItem from "./CharacterListItem";

class CharacterList extends Component {
  render() {
    const { characterList } = this.props;

    return characterList.map(character => {
      const { id } = character;

      return <CharacterListItem key={id} character={character} />;
    });
  }
}

export default CharacterList;
