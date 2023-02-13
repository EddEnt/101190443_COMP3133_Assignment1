const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const MONGODB =
  "mongodb+srv://EEnt:assignment1pass@cluster0.fsdt3.mongodb.net/?retryWrites=true&w=majority";

//Apollo server

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
