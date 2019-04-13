import React, { Component } from "react";

import Button from "../common/Button";
import InputField from "../common/InputField";

import { fetchEpisodeList } from "../../pages/EpisodeListPage/EpisodeListQuery";

import "./NewEpisodeForm.css";

class NewEpisodeForm extends Component {
  state = { director: "", producer: "", title: "" };

  handleAddNewEpisode = () => {
    const { addEpisode } = this.props;
    const { director, producer, title } = this.state;

    const newEpisode = { characters: [2], director, producer, title };

    addEpisode({
      refetchQueries: [{ query: fetchEpisodeList }],
      variables: { newEpisode }
    });
  };

  handleTitleChange = event => {
    const { target } = event;
    const { value } = target;

    this.setState({ title: value });
  };

  handleProducerChange = event => {
    const { target } = event;
    const { value } = target;

    this.setState({ producer: value });
  };

  handleDirectorChange = event => {
    const { target } = event;
    const { value } = target;

    this.setState({ director: value });
  };

  render() {
    const { director, producer, title } = this.state;

    return (
      <div>
        <InputField
          label="Title"
          id="title-input"
          value={title}
          onChange={this.handleTitleChange}
        />
        <InputField
          label="Director"
          id="director-input"
          value={director}
          onChange={this.handleDirectorChange}
        />
        <InputField
          label="Producer"
          id="producer-input"
          value={producer}
          onChange={this.handleProducerChange}
        />
        <Button label="Add" onClick={this.handleAddNewEpisode} />
      </div>
    );
  }
}

export default NewEpisodeForm;
