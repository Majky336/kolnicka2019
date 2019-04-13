import React, { Component } from "react";
import { Query } from "react-apollo";

import { fetchCharacter } from "./CharacterDetailQuery";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";

import "./CharacterDetailPage.css";

class CharacterDetailPage extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { characterIndex } = params;
    const value = parseInt(characterIndex, 10) - 1;

    return (
      <div className="character-detail-page-wrapper">
        <Query query={fetchCharacter} variables={{ characterIndex: { value } }}>
          {({ data, error, loading }) => {
            if (loading) {
              return <div>Loading, please wait.</div>;
            }

            if (error) {
              return <div>error</div>;
            }

            const { getCharacter } = data || {};

            return <CharacterDetail character={getCharacter} />;
          }}
        </Query>
      </div>
    );
  }
}

export default CharacterDetailPage;
