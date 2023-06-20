const { gql } = require("apollo-server-express");


module.exports = gql`

# Admin Based Input and Queries #######################################################
######################################################################################


type Admin {
    id:String
    first_name:String
    last_name:String
    role:String
    email:String
}

type AuthPayload {
    authToken: String
    id:String
    first_name:String
    last_name:String
    role:String
    email:String
    message:String
}

input AdminInput {
    first_name:String!
    last_name:String
    email:String!
    password:String!
}

type AdminAuthOutput {
    message:String
    status:Boolean
    data:AuthPayload
}

# Extended QUERIES AND MUTATIONS ######################################
#######################################################################

extend type Mutation {
    adminSignUp(data: AdminInput): AdminAuthOutput!
    adminSignIn(email: String!, password: String!): AdminAuthOutput!
}


`;