import React, { Component } from "react";
import { Mutation } from "react-apollo";

import { addEpisodeMutation } from "./NewEpisodeQuery";
import NewEpisodeForm from "../../components/NewEpisode/NewEpisodeForm";

class NewEpisodePage extends Component {
  render() {
    return (
      <Mutation mutation={addEpisodeMutation}>
        {(addEpisodeMutation, { data, loading }) => {
          console.log(data);

          return (
            <div>
              <h1>Add new episode</h1>
              <NewEpisodeForm addEpisode={addEpisodeMutation} />
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default NewEpisodePage;
