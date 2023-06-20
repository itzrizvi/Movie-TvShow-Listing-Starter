const { gql } = require("apollo-server-express");


module.exports = gql`

# Movie Input and Queries ###############################################
##############################################################################

type Movie {
    id: String
    title:String
    slug:String
    releaseDate:String
    runtime:String
    actors:[String]
    actresses:[String]
    producers:[String]
    genres:[String]
    directors:[String]
    productionTeam:[String]
    cameraAndItTeam:[String]
    visualEffectsTeam:[String]
    artTeam:[String]
    writers:[String]
    musicTeam:[String]
    locationDepartment:[String]
    costumeDepartment:[String]
    imdbRating:String
    origin:String
}

input CreateMovieInput {
    title:String!
    releaseDate:String!
    runtime:String!
    actors:[String!]
    actresses:[String!]
    producers:[String!]
    genres:[String!]
    directors:[String!]
    productionTeam:[String!]
    cameraAndItTeam:[String!]
    visualEffectsTeam:[String!]
    artTeam:[String!]
    writers:[String!]
    musicTeam:[String!]
    locationDepartment:[String!]
    costumeDepartment:[String!]
    imdbRating:String!
    origin:String
}

input UpdateMovieInput {
    id:String!
    title:String
    releaseDate:String
    runtime:String
    actors:[String]
    actresses:[String]
    producers:[String]
    genres:[String]
    directors:[String]
    productionTeam:[String]
    cameraAndItTeam:[String]
    visualEffectsTeam:[String]
    artTeam:[String]
    writers:[String]
    musicTeam:[String]
    locationDepartment:[String]
    costumeDepartment:[String]
    imdbRating:String
    origin:String
}

input GetSingleMovieInput {
    id:String
}

type GetSingleMovieOutput {
    message:String
    status:Boolean
    data:Movie
}

input GetMovieListInput {
    page:Int
    limit:Int
}

type GetMovieListOutput {
    message:String
    status:Boolean
    showing:Int
    currentPage:Int
    totalMovies:Int
    totalPages:Int
    data:[Movie]
}

input DeleteMovieInput {
    id:String!
}


# Extended QUERIES AND MUTATIONS ######################################
#######################################################################

extend type Mutation {
    createMovie(data: CreateMovieInput): CommonOutput!
    updateMovie(data: UpdateMovieInput): CommonOutput!
    deleteMovie(data: DeleteMovieInput):CommonOutput!
}

extend type Query {
    getMovieList(query: GetMovieListInput): GetMovieListOutput!
    getSingleMovie(query: GetSingleMovieInput): GetSingleMovieOutput!
}


`;