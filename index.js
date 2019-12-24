const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./src/resolvers')

const typeDefs = importSchema('./src/schema/schema.graphql')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });