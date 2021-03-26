const { gql } = require('apollo-server');

const typeDefs = gql`
    type SpaceCat {
        entry_id: ID!
        title: String!
        photo: String
        description: String!
        missions: [Mission]
    }
    type GetCat {
        entry_id: Int
        title: String
        photo: String
        description: String
        missions: [Mission]
    }
    type GetPhoto {
        photo: String
    }
    type GetCatById {
        entry_id: Int
        title: String
        photo: String
        description: String
    }
    type Mission {
        row_id: Int
        name: String
        description: String
    }
    "And the Query type"
    type Query {
        " Get list of tracks on the home page. Not Null!"
        spaceCats: [SpaceCat]
        getCat(name: String): GetCat
        getPhoto(cat: String): GetPhoto
        getCatById(id: Int): GetCatById
    }
`;

module.exports = typeDefs;
