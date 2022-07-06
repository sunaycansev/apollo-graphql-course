const resolvers = {
  Query: {
    // returns an array of Tracks that will be used o populate
    // the homepage grid of our client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      dataSources.trackAPI.getAuthour(authorId);
    },
  },
};

module.exports = resolvers;
