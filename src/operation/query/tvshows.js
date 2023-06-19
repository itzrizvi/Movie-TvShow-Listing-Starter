// Stuff BASED QUERY
// const { getTvShowListController, getSingleTvShowController } = require('../../controllers');

// STAFF QUERIES
module.exports = {
    // GET ALL STAFF
    getTvShowList: async (root, args, { db, user, isAuth }, info) => {
        // Return If No Auth
        if (!user || !isAuth) return { message: "Not Authorized", isAuth: false, data: [], status: false };

        // Return To Controller
        // return await getTvShowListController(db, user, isAuth);
    },
    // GET SINGLE STAFF/ADMIN
    getSingleTvShow: async (root, args, { db, user, isAuth }, info) => {
        // Return If No Auth
        if (!user || !isAuth) return { message: "Not Authorized", status: false };


        // Return To Controller
        // return await getSingleTvShowController(args.query, db, user, isAuth);
    }
}