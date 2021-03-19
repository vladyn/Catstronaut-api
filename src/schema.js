const { gql } = require('apollo-server');

const typeDefs = gql`
  type SpaceCat {
      id: ID!
      name: String!
      age: Int,
      photo: String
      missions: [Mission]
   }
  "Cat missions"
  type Mission {
      id: ID!
      name: String!
      description: String!
  }
  "And the Query type"
  type Query {
      " Get list of tracks on the home page. Not Null!"
      spaceCats: [SpaceCat],
      missions: [Mission]
  }
`;

module.exports = typeDefs;
