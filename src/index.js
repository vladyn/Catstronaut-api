const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const mocks = require('./mocks');
// const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  mocks
  // resolvers
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
