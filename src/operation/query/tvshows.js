// TV Shows BASED QUERY
const { getTvShowListController, getSingleTvShowController } = require('../../controllers');

// TV SHOW QUERIES
module.exports = {
    // GET TV SHOW LIST
    getTvShowList: async (root, args, { db }, info) => {
        try {
            // Return To Controller
            return await getTvShowListController(args.query, db);
        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET SINGLE TV SHOW
    getSingleTvShow: async (root, args, { db }, info) => {
        try {
            // Return To Controller
            return await getSingleTvShowController(args.query, db);

        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    }
}