const { gql } = require("apollo-server-express");


module.exports = gql`

# TV SHOW Input and Queries ###############################################
##############################################################################

type TVShow {
    id: Int
    name:String
}

type TVShowOutput {
    message: String
    status:Boolean
    data: [TVShow]
}

input CreateTVShowInput {
    name:String!
}

type CreateTVShowOutput {
    message:String
    status:Boolean
}

type SingleTVShow {
    id: Int
    name:String
}

input GetSingleTVShowInput {
    id:Int
}

type GetSingleTVShowOutput {
    message:String
    status:Boolean
    data:SingleTVShow
}


# Extended QUERIES AND MUTATIONS ######################################
#######################################################################

extend type Mutation {
    createTVShow(data: CreateTVShowInput): CreateTVShowOutput!
}

extend type Query {
    getTvShowList: TVShowOutput!
    getSingleTvShow(query: GetSingleTVShowInput): GetSingleTVShowOutput!
}


`;