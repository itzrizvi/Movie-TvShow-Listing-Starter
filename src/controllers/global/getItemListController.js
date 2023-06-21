// All Requires
const { getItemList } = require("../../helpers/globalHelper");
const { singleResponse } = require("../../utils/response");

// GET List Controller
module.exports = async (query, db) => {
    // Helper
    const data = await getItemList(query, db);

    // Return Data
    return singleResponse(data);

}