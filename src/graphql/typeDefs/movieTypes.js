const { gql } = require("apollo-server-express");


module.exports = gql`

# Movie Input and Queries ###############################################
##############################################################################

type Actors {
    name:String
}
input ActorsInput {
    name:String
}
type Actresses {
    name:String
}
input ActressesInput {
    name:String
}
type Producers {
    name:String
}
input ProducersInput {
    name:String
}
type Genres {
    name:String
}
input GenresInput {
    name:String
}
type Directors {
    name:String
}
input DirectorsInput {
    name:String
}
type ProductionTeam {
    name:String
}
input ProductionTeamInput {
    name:String
}
type CameraAndItTeam {
    name:String
}
input CameraAndItTeamInput {
    name:String
}
type VisualEffectsTeam {
    name:String
}
input VisualEffectsTeamInput {
    name:String
}
type ArtTeam {
    name:String
}
input ArtTeamInput {
    name:String
}
type Writers {
    name:String
}
input WritersInput {
    name:String
}
type MusicTeam {
    name:String
}
input MusicTeamInput {
    name:String
}
type LocationDepartment {
    name:String
}
input LocationDepartmentInput {
    name:String
}
type CostumeDepartment {
    name:String
}
input CostumeDepartmentInput {
    name:String
}


type Movie {
    id: String
    title:String
    slug:String
    releaseDate:String
    runtime:String
    actors:[Actors]
    actresses:[Actresses]
    producers:[Producers]
    genres:[Genres]
    directors:[Directors]
    productionTeam:[ProductionTeam]
    cameraAndItTeam:[CameraAndItTeam]
    visualEffectsTeam:[VisualEffectsTeam]
    artTeam:[ArtTeam]
    writers:[Writers]
    musicTeam:[MusicTeam]
    locationDepartment:[LocationDepartment]
    costumeDepartment:[CostumeDepartment]
    imdbRating:String
    origin:String
}

input CreateMovieInput {
    title:String!
    releaseDate:String!
    runtime:String!
    actors:[ActorsInput!]
    actresses:[ActressesInput!]
    producers:[ProducersInput!]
    genres:[GenresInput!]
    directors:[DirectorsInput!]
    productionTeam:[ProductionTeamInput!]
    cameraAndItTeam:[CameraAndItTeamInput!]
    visualEffectsTeam:[VisualEffectsTeamInput!]
    artTeam:[ArtTeamInput!]
    writers:[WritersInput!]
    musicTeam:[MusicTeamInput!]
    locationDepartment:[LocationDepartmentInput!]
    costumeDepartment:[CostumeDepartmentInput!]
    imdbRating:String!
    origin:String
}

input UpdateMovieInput {
    id:String!
    title:String
    releaseDate:String
    runtime:String
    actors:[ActorsInput]
    actresses:[ActressesInput]
    producers:[ProducersInput]
    genres:[GenresInput]
    directors:[DirectorsInput]
    productionTeam:[ProductionTeamInput]
    cameraAndItTeam:[CameraAndItTeamInput]
    visualEffectsTeam:[VisualEffectsTeamInput]
    artTeam:[ArtTeamInput]
    writers:[WritersInput]
    musicTeam:[MusicTeamInput]
    locationDepartment:[LocationDepartmentInput]
    costumeDepartment:[CostumeDepartmentInput]
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
type GetMovieListOutput {
    message:String
    status:Boolean
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
    getMovieList: GetMovieListOutput!
    getSingleMovie(query: GetSingleMovieInput): GetSingleMovieOutput!
}


`;