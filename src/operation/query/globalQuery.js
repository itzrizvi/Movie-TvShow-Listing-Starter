// GLOBAL QUERY
const { getItemListController, getSingleItemController } = require('../../controllers');

// GLOBAL QUERIES
module.exports = {
    // GET  LIST
    getItemList: async (root, args, { db }, info) => {
        try {
            // Return To Controller
            return await getItemListController(args.query, db);
        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET SINGLE
    getSingleItem: async (root, args, { db }, info) => {
        try {
            // Return To Controller
            return await getSingleItemController(args.query, db);

        } catch(error){
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    }
}