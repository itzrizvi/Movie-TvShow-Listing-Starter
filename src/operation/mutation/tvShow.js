// All Requires
const { createTVShowController,
    updateTVShowController,
    deleteTVShowController } = require('../../controllers');


module.exports = {
    // CREATE TV SHOW MUTATION
    createTVShow: async (root, args, { db, user, isAuth }, info) => {
        try {
            if (!isAuth) return { message:"Not Authorized", status:false};
            return await createTVShowController(args.data, db, user, isAuth );

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // UPDATE TV SHOW MUTATION
    updateTVShow: async (root, args, { db, user, isAuth  }, info) => {
        try {
            if (!isAuth) return { message:"Not Authorized", status:false};
            return await updateTVShowController(args.data, db, user, isAuth );

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    },
    // DELETE TV SHOW MUTATION
    deleteTVShow: async (root, args, { db, user, isAuth  }, info) => {
        try {
            if (!isAuth) return { message:"Not Authorized", status:false};
            return await deleteTVShowController(args.data, db, user, isAuth);

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    }
}