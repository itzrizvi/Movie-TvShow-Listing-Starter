// All Requires
const { adminSignUpController,
    adminSignInController,
    validateToken } = require('../../controllers');


module.exports = {
    // ADMIN SIGN UP MUTATION
    adminSignUp: async (root, args, { db, res }, info) => {
        try {
            return await adminSignUpController(args.data, db, res);

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // ADMIN SIGN IN MUTATION
    adminSignIn: async (root, { email, password }, { db, res }, info) => {
        try {
            const data = {
                email,
                password
            }
            return await adminSignInController(data, db, res);

        } catch (error) {

            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    },
    // Token Validate
    validateToken: async (root, args, { db }, info) => {
        return await validateToken(args.token, db);
    }
}