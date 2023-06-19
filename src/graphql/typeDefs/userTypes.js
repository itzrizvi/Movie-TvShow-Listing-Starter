const { gql } = require("apollo-server-express");


module.exports = gql`

# User Based Input and Queries #######################################################
######################################################################################


type User {
    id:String
    first_name:String
    last_name:String
    email:String
}

type AuthPayload {
    authToken: String
    id:Int
    first_name:String
    last_name:String
    email:String
    message:String
}

input UserInput {
    first_name:String!
    last_name:String
    email:String!
    password:String!
}

type UserAuthOutput {
    message:String
    status:Boolean
    data:AuthPayload
}

# Extended QUERIES AND MUTATIONS ######################################
#######################################################################

extend type Mutation {
    userSignUp(data: UserInput): UserAuthOutput!
    userSignIn(email: String!, password: String!): UserAuthOutput!
}


`;