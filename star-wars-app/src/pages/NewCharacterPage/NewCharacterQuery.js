import { gql } from "apollo-boost";

export const addCharacterMutation = gql`
  mutation createCharacter($newCharacter: NewCharacter!) {
    createCharacter(newCharacter: $newCharacter) {
      id
      name
    }
  }
`;
