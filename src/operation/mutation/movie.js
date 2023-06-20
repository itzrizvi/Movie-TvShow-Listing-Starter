// All Requires
const { createMovieController,
    updateMovieController,
    deleteMovieController } = require('../../controllers');


module.exports = {
    // CREATE MOVIE MUTATION
    createMovie: async (root, args, { db, res }, info) => {
        try {
            return await createMovieController(args.data, db, res);

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // UPDATE MOVIE MUTATION
    updateMovie: async (root, args, { db, res }, info) => {
        try {
            return await updateMovieController(args.data, db, res);

        } catch (error) {

            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    },
    // DELETE MOVIE MUTATION
    deleteMovie: async (root, args, { db, res }, info) => {
        try {
            return await deleteMovieController(args.data, db, res);

        } catch (error) {

            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }

    }
}