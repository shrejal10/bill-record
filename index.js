const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs/index");
const resolvers = require("./resolvers/index");
const mongoose = require("mongoose");

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
  await mongoose.connect("mongodb://127.0.0.1:27017/billRecords_db", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("mongoose coneected...");
  app.listen(4000, () => console.log("Server is running on 4000"));
}

startServer();
