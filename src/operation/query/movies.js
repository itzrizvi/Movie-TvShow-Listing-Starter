// Stuff BASED QUERY
// const { getMovieListController, getSingleMovieController } = require('../../controllers');

// STAFF QUERIES
module.exports = {
    // GET ALL STAFF
    getMovieList: async (root, args, { db, user, isAuth }, info) => {
        // Return If No Auth
        if (!user || !isAuth) return { message: "Not Authorized", isAuth: false, data: [], status: false };

        // Return To Controller
        // return await getMovieListController(db, user, isAuth);
    },
    // GET SINGLE STAFF/ADMIN
    getSingleMovie: async (root, args, { db, user, isAuth }, info) => {
        // Return If No Auth
        if (!user || !isAuth) return { message: "Not Authorized", status: false };


        // Return To Controller
        // return await getSingleMovieController(args.query, db, user, isAuth);
    }
}