import { gql } from "apollo-boost";

export const fetchEpisode = gql`
  query GetEpisode($episodeIndex: EpisodeIndex!) {
    getEpisode(episodeIndex: $episodeIndex) {
      id
      title
      opening_crawl
      release_date
      characters {
        id
        name
      }
    }
  }
`;
