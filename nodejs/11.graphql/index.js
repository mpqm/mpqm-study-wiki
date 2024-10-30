const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const {ApolloServer} = require("@apollo/server")
const cors = require("cors")
const {json} = require("body-parser")
const {expressMiddleware} = require('@apollo/server/express4')
const path = require('path')

const loadedTypes = loadFilesSync('**/*', { extensions: ['graphql'], })
const loadedResolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"))

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: loadedTypes,
        resolvers: loadedResolvers
    })
    
    const server = new ApolloServer({ schema })
    await server.start();
    
    app.use(
        '/graphql',
        cors(),
        json(),
        expressMiddleware(server, { context: async({req}) => ({token: req.headers.token})})
    )
    const port = 4000
    app.listen(port, () => { console.log(`Running GraphQL API Server on http://localhost:${port}/graphql`) })
}

startApolloServer()