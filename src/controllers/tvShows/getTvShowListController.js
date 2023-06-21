// All Requires
const { getTvShowList } = require("../../helpers/tvShowHelper");
const { singleResponse } = require("../../utils/response");

// GET TV SHOW List Controller
module.exports = async (query, db) => {
    // Helper
    const data = await getTvShowList(query, db);

    // Return Data
    return singleResponse(data);

}