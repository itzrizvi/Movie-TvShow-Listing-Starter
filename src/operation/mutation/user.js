// All Requires
const { userSignUpController,
    userSignInController,
    validateToken } = require('../../controllers');


module.exports = {
    // SIGN UP MUTATION
    userSignUp: async (root, args, { db, res }, info) => {
        try {
            return await userSignUpController(args.data, db, res);

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // SIGN IN MUTATION
    userSignIn: async (root, { email, password }, { db, res }, info) => {
        try {
            const data = {
                email,
                password
            }
            return await userSignInController(data, db, res);

        } catch (error) {

            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    },
    // Token Validate
    validateToken: async (root, args, { db }, info) => {
        return await validateToken(args.token, db);
    }
}