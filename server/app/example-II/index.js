const { ApolloServer, gql } = require('apollo-server');
const { findBand, findAllBands,
     findAlbumsByBandId, findSongsByAlbumId } = require('./repository')

const typeDefs = gql`
  type Band {
    id: ID!
    name: String
    country: String
    genre: [String]
    albums: [Album]
  }

  type Album {
    id: ID!
    name: String 
    releaseYear: Int
    songs: [Song]
  }

  type Song {
    id : ID!
    name : String
    duration : Float
  }

  type Query {
    bands: [Band]
    band(id: ID!): Band
  }
`;

const resolvers = {
  Query: {
    bands: () => findAllBands(),
    band(_, args) {
        return findBand(args.id);
    }
  },
  Band : {
    albums : (e) => findAlbumsByBandId(e.id)
  },
  Album : {
    songs : (e) => findSongsByAlbumId(e.id)
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});