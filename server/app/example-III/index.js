const { ApolloServer, gql } = require('apollo-server');
const { findBand,
        findAllBands,
        findAlbumsByBandId,
        findSongsByAlbumId,
        addBand,
        addAlbum,
        addSong } = require('./repository')

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

  input BandInput {
    name: String!
    country: String!
    genre: [String]
  }

  input AlbumInput {
    name: String!
    releaseYear: Int
  }

  input SongInput {
    name: String!
    duration: Float
  }

  type Query {
    bands: [Band]
    band(id: ID!): Band
  }

  type Mutation {
    addBand(band: BandInput!): Band
    addAlbum(bandId: ID!, album: AlbumInput!): Album
    addSong(albumId: ID!, song: SongInput!) : Song
  }
`;

const resolvers = {
  Query: {
    bands: () => findAllBands(),
    band(_, args) {
        return findBand(args.id);
    }
  },
  Mutation: {
    addBand(_, args) {
      return addBand(args.band);
    },
    addSong(_, args) {
      return addAlbum(args.bandId, args.album);
    },
    addSong(_, args) {
      return addSong(args.albumId, args.song);
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