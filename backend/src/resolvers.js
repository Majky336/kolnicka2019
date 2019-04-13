import episodeList from "./mockData/episodeList";
import characterList from "./mockData/characterList";

const resolvers = {
  Query: {
    helloWorld: () => `Hello from the dark side`,
    getEpisodeList: () => episodeList,
    getCharacterList: () => characterList,
    getEpisode: (obj, { episodeIndex }) => episodeList[episodeIndex.value],
    getCharacter: (obj, { characterIndex }) =>
      characterList[characterIndex.value]
  },
  Mutation: {
    createEpisode: (obj, { newEpisode }) => ({
      id: `episode-${Date.now()}`,
      ...newEpisode
    }),
    createCharacter: (obj, { newCharacter }) => ({
      id: `character-${Date.now()}`,
      ...newCharacter
    })
  },
  Episode: {
    characters: obj =>
      characterList.filter(item =>
        obj.characters.find(characterId => characterId === item.id)
      )
  }
};

export default resolvers;
