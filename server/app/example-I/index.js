const { ApolloServer, gql } = require('apollo-server');

let bands = [
  {
      "id": 1,
      "name": "AC/DC",
      "country" : "Australia",
      "genre": ["Hard Rock", "Blues Rock", "Glam Rock"]
  },
  {
      "id": 2,
      "name": "Led Zeppelin",
      "country" : "United Kingdom",
      "genre": ["Hard Rock", "Blues Rock", "Folk Rock", "Rock"]
  },
  {
      "id": 3,
      "name": "Rage Against the Machine",
      "country" : "United States",
      "genre": ["Rap Metal", "Alternative Metal", "Rap Rock", "Alternative Rock"]
  }
]

function findBand(id) {
  return bands.find(b => b.id == id);
}

const typeDefs = gql`
  type Band {
    id: ID!
    name: String
    country: String
    genre: [String]
  }

  type Query {
    bands: [Band]
    band(id: ID!): Band
  }
`;

const resolvers = {
  Query: {
    bands: () => bands,
    band(_, args) {
        return findBand(args.id);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});