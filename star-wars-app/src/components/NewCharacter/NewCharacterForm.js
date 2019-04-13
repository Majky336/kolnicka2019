import React, { Component } from "react";

import Button from "../common/Button";
import InputField from "../common/InputField";

class NewCharacterForm extends Component {
  state = { name: "" };

  handleAddNewCharacter = () => {
    const { addCharacter } = this.props;
    const { name } = this.state;

    const newCharacter = { name };

    addCharacter({
      variables: { newCharacter }
    });
  };

  handleNameChange = event => {
    const { target } = event;
    const { value } = target;

    this.setState({ name: value });
  };

  renderCreatedData = () => {
    const { data } = this.props;
    const { createCharacter } = data || {};
    const { id, name } = createCharacter || {};

    if (!data) {
      return null;
    }

    return (
      <div>
        You just created {name} with id: {id}
      </div>
    );
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <InputField
          label="Name"
          id="name-input"
          value={name}
          onChange={this.handleNameChange}
        />
        <Button label="Add" onClick={this.handleAddNewCharacter} />
        {this.renderCreatedData()}
      </div>
    );
  }
}

export default NewCharacterForm;
