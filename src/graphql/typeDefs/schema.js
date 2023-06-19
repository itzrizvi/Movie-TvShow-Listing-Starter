const { gql } = require('apollo-server-express');
// All Type Defs
const userTypeDefs = require("./userTypes");
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
    tenant_id:String
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
    movieTypeDefs,
    tvShowTypeDefs,
]
