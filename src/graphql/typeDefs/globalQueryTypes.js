const { gql } = require("apollo-server-express");


module.exports = gql`

# Global Input and Queries ###############################################
##############################################################################

input GetSingleItemInput {
    id:String
}

type GetSingleItemOutput {
    message:String
    status:Boolean
    movie:Movie
    tvShow:TVShow
}

input GetItemListInput {
    perPage: Int
    page: Int
}

type Pagination {
    page: Int
    perPage: Int
    totalItems: Int
    totalPages: Int
}

type GetItemListOutput {
    message:String
    status:Boolean
    movies:[Movie]
    tvShows:[TVShow]
    pagination: Pagination
}


# Extended QUERIES ######################################
#########################################################

extend type Query {
    getItemList(query: GetItemListInput): GetItemListOutput!
    getSingleItem(query: GetSingleItemInput): GetSingleItemOutput!
}


`;