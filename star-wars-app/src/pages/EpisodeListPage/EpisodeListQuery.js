import { gql } from "apollo-boost";

export const fetchEpisodeList = gql`
  {
    getEpisodeList {
      id
      title
      director
      producer
      release_date
    }
  }
`;
