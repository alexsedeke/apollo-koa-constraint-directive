const { ApolloServer, makeExecutableSchema } = require('apollo-server-koa')
const ConstraintDirective = require('../')

const constructTestServer = (typeDefs, resolvers) => {
  const schema = makeExecutableSchema({
    typeDefs,
    schemaDirectives: { constraint: ConstraintDirective },
    resolvers
  });

  const server = new ApolloServer({ schema });
  return { server };
};

module.exports.constructTestServer = constructTestServer;
