// All Requires
const { getSingleTvShow } = require("../../helpers/tvShowHelper");
const { singleResponse } = require("../../utils/response");

// GET Single TV SHOW Controller
module.exports = async (query, db) => {
    // Helper
    const data = await getSingleTvShow(query, db);

    // Return Data
    return singleResponse(data);

}