import { gql } from "apollo-boost";

export const addEpisodeMutation = gql`
  mutation createEpisode($newEpisode: NewEpisode!) {
    createEpisode(newEpisode: $newEpisode) {
      id
      title
    }
  }
`;
