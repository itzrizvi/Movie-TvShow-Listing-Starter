const { adminSignIn } = require("../../helpers/adminHelper");
const { singleResponse } = require("../../utils/response");


// Controller
module.exports = async (req, db, res) => {

    try {
        const data = await adminSignIn(req, db, res);
        return singleResponse(data);

    } catch (error) {
        if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
    }
}