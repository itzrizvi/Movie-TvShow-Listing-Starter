// All Requires
const { getSingleMovie } = require("../../helpers/movieHelper");
const { singleResponse } = require("../../utils/response");

// GET Single Movie Controller
module.exports = async (query, db) => {
    // Helper
    const data = await getSingleMovie(query, db);

    // Return Data
    return singleResponse(data);

}