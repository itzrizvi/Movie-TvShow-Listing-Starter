// All Requires
const { getMovieList } = require("../../helpers/movieHelper");
const { singleResponse } = require("../../utils/response");

// GET Movie List Controller
module.exports = async (query, db) => {
    // Helper
    const data = await getMovieList(query, db);

    // Return Data
    return singleResponse(data);

}