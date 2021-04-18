const { gql } = require('apollo-server');

const typeDefs = gql`
    type SpaceCat {
        entry_id: ID!
        channel_id: Int
        author_id: Int
        title: String!
        url_title: String!
        photo: String
        description: String!
        missions: [Mission]
        status: String
        entry_date: Float
        edit_date: Float,
        expiration_date: Float
    }
    type GetCat {
        entry_id: Int
        channel_id: Int
        author_id: Int
        title: String!
        url_title: String!
        photo: String
        description: String
        missions: [Mission]
        status: String
        entry_date: Float
        edit_date: Float,
        expiration_date: Float
    }
    type GetPhoto {
        photo: String
    }
    type GetCatById {
        entry_id: Int
        channel_id: Int
        author_id: Int
        title: String!
        url_title: String!
        photo: String
        description: String
        missions: [Mission]
        status: String
        entry_date: Float
        edit_date: Float,
        expiration_date: Float
    }
    type Mission {
        row_id: Int
        name: String
        description: String
    }
    """
    Get a page by name
    """
    type Page {
        title: String
        heading_one: String
        heading_two: String
        page_content_left_column: String
        page_content_right_column: String
        page_content_row: String
    }
    "And the Query type"
    type Query {
        " Get list of tracks on the home page. Not Null!"
        spaceCats: [SpaceCat]
        getCat(name: String): GetCat
        getPhoto(cat: String): GetPhoto
        getCatById(id: Int): GetCatById
        getPage(page: String): Page
    }
`;

module.exports = typeDefs;
