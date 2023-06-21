const { gql } = require("apollo-server-express");


module.exports = gql`

# TV SHOW Input and Queries ###############################################
##############################################################################

type Episode {
    episode: String
    title: String
    slug: String
    runtime: String
}

type Season {
    season: String
    releaseDate: String
    totalRuntime: String
    episodes: [Episode]
}

input EpisodeInput {
    episode: String!
    title: String!
    runtime: String!
}

input SeasonInput {
    season: String!
    releaseDate: String!
    totalRuntime: String!
    episodes: [EpisodeInput!]
}

type TVShow {
    id: String
    title: String
    slug: String
    seasons:[Season]
    actors:[String]
    actresses:[String]
    producers:[String]
    genres:[String]
    directors:[String]
    productionTeam:[String]
    cameraAndItTeam:[String]
    visualEffectsTeam:[String]
    artTeam:[String]
    sponsors:[String]
    writers:[String]
    musicTeam:[String]
    costumeDepartment:[String]
    imdbRating:String
    origin:String
}

input CreateTVShowInput {
    title: String!
    seasons:[SeasonInput!]
    actors:[String!]
    actresses:[String!]
    producers:[String!]
    genres:[String!]
    directors:[String!]
    productionTeam:[String!]
    cameraAndItTeam:[String!]
    visualEffectsTeam:[String]
    artTeam:[String]
    sponsors:[String]
    writers:[String!]
    musicTeam:[String!]
    costumeDepartment:[String!]
    imdbRating:String!
    origin:String
}

input UpdateTVShowInput {
    id: String!
    title: String
    seasons:[SeasonInput]
    actors:[String]
    actresses:[String]
    producers:[String]
    genres:[String]
    directors:[String]
    productionTeam:[String]
    cameraAndItTeam:[String]
    visualEffectsTeam:[String]
    artTeam:[String]
    sponsors:[String]
    writers:[String]
    musicTeam:[String]
    costumeDepartment:[String]
    imdbRating:String
    origin:String
}


input GetSingleTVShowInput {
    id:String
}

type GetSingleTVShowOutput {
    message:String
    status:Boolean
    data: TVShow
}

input GetTVShowListInput {
    page:Int
    limit:Int
}

type GetTVShowListOutput {
    message:String
    status:Boolean
    showing:Int
    currentPage:Int
    totalMovies:Int
    totalPages:Int
    data:[TVShow]
}

input DeleteTVShowInput {
    id:String!
}



# Extended QUERIES AND MUTATIONS ######################################
#######################################################################

extend type Mutation {
    createTVShow(data: CreateTVShowInput): CommonOutput!
    updateTVShow(data: UpdateTVShowInput): CommonOutput!
    deleteTVShow(data: DeleteTVShowInput):CommonOutput!
}

extend type Query {
    getTvShowList(query: GetTVShowListInput): GetTVShowListOutput!
    getSingleTvShow(query: GetSingleTVShowInput): GetSingleTVShowOutput!
}


`;