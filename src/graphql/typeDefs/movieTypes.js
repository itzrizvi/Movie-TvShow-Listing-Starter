const { gql } = require("apollo-server-express");


module.exports = gql`

# Movie Input and Queries ###############################################
##############################################################################

type Movie {
    id: String
    name:String
}

type MovieOutput {
    message: String
    status:Boolean
    data: [Movie]
}

input CreateMovieInput {
    name:String!
}

type CreateMovieOutput {
    message:String
    status:Boolean
}

type SingleMovie {
    id:String
    name:String
}

input GetSingleMovieInput {
    id:String
}

type GetSingleMovieOutput {
    message:String
    status:Boolean
    data:SingleMovie
}


# Extended QUERIES AND MUTATIONS ######################################
#######################################################################

extend type Mutation {
    createMovie(data: CreateMovieInput): CreateMovieOutput!
}

extend type Query {
    getMovieList: MovieOutput!
    getSingleMovie(query: GetSingleMovieInput): GetSingleMovieOutput!
}


`;