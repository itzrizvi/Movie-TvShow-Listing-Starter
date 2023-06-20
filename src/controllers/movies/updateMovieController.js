// All Requires
const { updateMovie } = require("../../helpers/movieHelper");
const { checkPermission } = require("../../utils/permissionChecker");
const { singleResponse } = require("../../utils/response");

// Update Movie Controller
module.exports = async (req, db, user, isAuth) => {

    // Check Permission
    const checkPermissions = await checkPermission(user);
    if (!checkPermissions.success) {
        return { message: "You dont have access to this route, please contact support!!!", status: false };
    }

    // Return If No Auth
    if (!user || !isAuth) return { message: "Not Authorized", status: false };

    // Helper
    const data = await updateMovie(req, db, user);

    // Return Data
    return singleResponse(data);

}