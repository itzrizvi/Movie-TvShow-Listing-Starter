const { adminSignUp } = require("../../helpers/adminHelper");
const { singleResponse } = require("../../utils/response");

// Admin Sign Up Controller Export
module.exports = async (req, db, res) => {
    try {
        // Check if Email Is Already Taken or Not
        const checkEmail = await db.User.findOne({ email: req.email });

        // If Email does not exist, create User
        if (!checkEmail) {
            const data = await adminSignUp(req, db, res);
            return singleResponse(data);
        } else {
            // Email is already taken
            const data = {
                message: `Email is already taken as an ${checkEmail.role}`,
                status: false,
            };
            return singleResponse(data);
        }
    } catch (error) {
        if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
    }
};
