// All Requires
const { getSingleItem } = require("../../helpers/globalHelper");
const { singleResponse } = require("../../utils/response");

// GET Single Controller
module.exports = async (query, db) => {
    // Helper
    const data = await getSingleItem(query, db);

    // Return Data
    return singleResponse(data);

}