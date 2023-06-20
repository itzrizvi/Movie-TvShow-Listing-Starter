// Movie BASED QUERY
const { getMovieListController, getSingleMovieController } = require('../../controllers');

// MOVIE QUERIES
module.exports = {
    // GET MOVIE LIST
    getMovieList: async (root, args, { db }, info) => {
        try {
            // Return To Controller
            return await getMovieListController(args.query, db);
        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET SINGLE MOVIE
    getSingleMovie: async (root, args, { db }, info) => {
        try {
            // Return To Controller
            return await getSingleMovieController(args.query, db);

        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    }
}