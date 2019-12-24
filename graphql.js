const { ApolloServer } = require('apollo-server-lambda')
const { importSchema } = require('graphql-import')

const resolvers = require('./src/resolvers')

const typeDefs = importSchema('./src/schema/schema.graphql')

const server = new ApolloServer({ typeDefs, resolvers })

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
})