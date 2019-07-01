const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const expressPlayground = require('graphql-playground-middleware-express').default
const { readFileSync } = require('fs')
const { MongoClient } = require('mongodb')
require('dotenv').config()
const typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8')
const resolvers = require('./resolvers')

// 1. Create Asynchronous Function
async function start() {
    const app = express()
    const MONGO_DB = process.env.DB_HOST
    //should be taken from env variable
    const dbUrl = `mongodb://leyndarmal:${encodeURIComponent('mypassword')}@18.223.143.245:27017/flightsDB`;
    const client = await MongoClient.connect(dbUrl )
    const db = client.db()

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => {
            const githubToken = req.headers.authorization
            const currentUser = await db.collection('users').findOne({ githubToken })
            return { db, currentUser }
        }
    })

    server.applyMiddleware({ app })

    app.get('/', (req, res) => res.end('Welcome to the PhotoShare API'))

    app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

    app.listen({ port: 3000 }, () =>
        console.log(
            `GraphQL Server running on aws url, port 3000${server.graphqlPath}`
        )
    )
}

// 5. Invoke start when ready to start
start()