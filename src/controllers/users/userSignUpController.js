const { userSignUp } = require("../../helpers/userHelper");
const { singleResponse } = require("../../utils/response");

// Sign Up Controller Export
module.exports = async (req, db) => {
    try {
        // Check if Email Is Already Taken or Not
        const checkEmail = await db.User.findOne({ email: req.email });

        // If Email does not exist, create User
        if (!checkEmail) {
            const data = await userSignUp(req, db);
            return singleResponse(data);
        } else {
            // Email is already taken
            const data = {
                message: "Email Is Already Taken",
                status: false,
            };
            return singleResponse(data);
        }
    } catch (error) {
        if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
    }
};
