const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "a track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustraion to display in track card or track page detail"
    thumbnail: String!
    "the track's length to complete, inminutes"
    length: Int
    "the number of modules in the track"
    modulesCount: Int
  }

  type Author {
    id: ID!
    "the author's name"
    name: String!
    "the author's photo"
    photo: String
  }
`;

module.exports = typeDefs;
