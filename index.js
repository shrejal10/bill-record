const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs/index");
const resolvers = require("./resolvers/index");
const mongoose = require("mongoose");
require('dotenv').config()

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send("Hello from express");
  });
  await mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("mongoose coneected...");
  app.listen(process.env.PORT || 4000, () => console.log("Server is running on 4000"));
}

startServer();
