import { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/typeDefs.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
