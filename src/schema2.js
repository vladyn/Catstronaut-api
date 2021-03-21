const { gql } = require('apollo-server');

const typeDefs = gql`
    type SpaceCat {
        entry_id: ID!
        title: String!
        photo: String
        description: String!
    }
    type GetCat {
        entry_id: ID!
        title: String!
        photo: String
        description: String!
    }
    type GetPhoto {
        photo: String!
    }
    type GetCatById {
        id: Int
    }
    "And the Query type"
    type Query {
        " Get list of tracks on the home page. Not Null!"
        spaceCats: [SpaceCat]
        getCat(cat: String): GetCat
        getPhoto(cat: String): GetPhoto
        getCatById: [GetCatById]
    }
`;

module.exports = typeDefs;
