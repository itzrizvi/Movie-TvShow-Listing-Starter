// Movie BASED QUERY
const { getMovieListController, getSingleMovieController } = require('../../controllers');

// MOVIE QUERIES
module.exports = {
    // GET MOVIE LIST
    getMovieList: async (root, args, { db, user, isAuth }, info) => {
        try {

            // Return To Controller
            return await getMovieListController(db, user, isAuth);

        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
        // Return If No Auth
        // if (!user || !isAuth) return { message: "Not Authorized", isAuth: false, data: [], status: false };
    },
    // GET SINGLE MOVIE
    getSingleMovie: async (root, args, { db, user, isAuth }, info) => {
        try {

            // Return To Controller
            return await getSingleMovieController(args.data, db, user, isAuth);

        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
        // Return If No Auth
        // if (!user || !isAuth) return { message: "Not Authorized", isAuth: false, data: [], status: false };
    },
}