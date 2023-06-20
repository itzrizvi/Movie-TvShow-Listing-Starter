const { gql } = require('apollo-server-express');
// All Type Defs
const userTypeDefs = require("./userTypes");
const adminTypeDefs = require("./adminTypes");
const movieTypeDefs = require("./movieTypes");
const tvShowTypeDefs = require("./tvShowTypes");



// Type Defs and Scalars
const typeDefs = gql`

scalar JSON
scalar JSONObject
scalar UUID
scalar Upload

# Common Output Type #################################################################
######################################################################################
type CommonOutput {
    message:String
    status:Boolean
}

type TokenOutput{
    status: Boolean!
}

type SuccessMessage {
    message: String
}


# ROOT QUERIES AND MUTATIONS ###############################################
############################################################################

type Mutation {
    validateToken(token: String): TokenOutput!
}
type Query{
    getPing:CommonOutput!
}
`;

// Export Type Defs
module.exports = [
    typeDefs,
    userTypeDefs,
    adminTypeDefs,
    movieTypeDefs,
    tvShowTypeDefs,
]
