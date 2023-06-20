// All Requires
const { createMovieController,
    updateMovieController,
    deleteMovieController } = require('../../controllers');


module.exports = {
    // CREATE MOVIE MUTATION
    createMovie: async (root, args, { db, user, isAuth }, info) => {
        try {
            return await createMovieController(args.data, db, user, isAuth );

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // UPDATE MOVIE MUTATION
    updateMovie: async (root, args, { db, user, isAuth  }, info) => {
        try {
            return await updateMovieController(args.data, db, user, isAuth );

        } catch (error) {

            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    },
    // DELETE MOVIE MUTATION
    deleteMovie: async (root, args, { db, user, isAuth  }, info) => {
        try {
            return await deleteMovieController(args.data, db, user, isAuth);

        } catch (error) {

            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    }
}