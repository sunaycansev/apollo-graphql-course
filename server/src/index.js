//TODO
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, the first kitty",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://images.unsplash.com/photo-1516098677942-b7f9d8b8a8e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      };
    },
    thumbnail: () =>
      "https://images.unsplash.com/photo-1516098677942-b7f9d8b8a8e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    length: () => 120,
    modulesCount: () => 3,
  }),
};

const server = new ApolloServer({ typeDefs, mocks: true });

server.listen().then(() => {
  console.log(`
  🚀 Server ready at http://localhost:4000${server.graphqlPath}
  Query at https://studio.apollographql.com/dev
  `);
});
