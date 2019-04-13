import { gql } from "apollo-boost";

export const fetchCharacter = gql`
  query GetCharacter($characterIndex: CharacterIndex!) {
    getCharacter(characterIndex: $characterIndex) {
      id
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
    }
  }
`;
