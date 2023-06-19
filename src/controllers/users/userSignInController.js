const { userSignIn } = require("../../helpers/userHelper");
const { singleResponse } = require("../../utils/response");


// Controller
module.exports = async (req, db) => {

    try {
        const data = await userSignIn(req, db);
        return singleResponse(data);

    } catch (error) {
        if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
    }
}