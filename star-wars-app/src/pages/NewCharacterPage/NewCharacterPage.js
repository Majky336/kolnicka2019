import React, { Component } from "react";
import { Mutation } from "react-apollo";

import { addCharacterMutation } from "./NewCharacterQuery";
import NewCharacterForm from "../../components/NewCharacter/NewCharacterForm";

class NewCharacterPage extends Component {
  render() {
    return (
      <Mutation mutation={addCharacterMutation}>
        {(addCharacterMutation, { data }) => {
          return (
            <NewCharacterForm addCharacter={addCharacterMutation} data={data} />
          );
        }}
      </Mutation>
    );
  }
}

export default NewCharacterPage;
