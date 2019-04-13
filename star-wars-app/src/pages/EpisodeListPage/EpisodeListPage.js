import React, { Component } from "react";
import { Query } from "react-apollo";

import EpisodeList from "../../components/EpisodeList/EpisodeList";

import { fetchEpisodeList } from "./EpisodeListQuery";
import Button from "../../components/common/Button";

class EpisodeListPage extends Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <Query query={fetchEpisodeList}>
          {({ data, error, loading }) => {
            if (loading) {
              return <div>Loading, please wait.</div>;
            }

            if (error) {
              return <div>error</div>;
            }

            const { getEpisodeList } = data || {};

            return (
              <EpisodeList episodeList={getEpisodeList} history={history} />
            );
          }}
        </Query>
        <Button label="Create new episode" to="/new-episode" />
        <Button label="Create new character" to="/new-character" />
      </div>
    );
  }
}

export default EpisodeListPage;
