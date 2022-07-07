const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "Query to get a track by id"
    track(id: ID!): Track
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
    "the track's cmplete desc, can be in Markdown format"
    description: String
    "the number of times a track has been viewed"
    numberOfViews: Int
    "the track's complete array of modules"
    modules: [Module!]!
  }
  type Module {
    id: ID!
    "the module's title"
    title: String
    "the module's length"
    length: Int
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
