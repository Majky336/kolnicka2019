import React, { Component } from "react";
import { Query } from "react-apollo";

import { fetchEpisode } from "./EpisodeDetailQuery";
import EpisodeDetail from "../../components/EpisodeDetail/EpisodeDetail";

import "./EpisodeDetailPage.css";

class EpisodeDetailPage extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { episodeIndex } = params;
    const value = parseInt(episodeIndex, 10) - 1;

    return (
      <div className="episode-page-wrapper">
        <Query query={fetchEpisode} variables={{ episodeIndex: { value } }}>
          {({ data, error, loading }) => {
            if (loading) {
              return <div>Loading, please wait.</div>;
            }

            if (error) {
              return <div>error</div>;
            }

            const { getEpisode } = data || {};

            return <EpisodeDetail episode={getEpisode} />;
          }}
        </Query>
      </div>
    );
  }
}

export default EpisodeDetailPage;
