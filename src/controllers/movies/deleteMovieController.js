// All Requires
const { deleteMovie } = require("../../helpers/movieHelper");
const { checkPermission } = require("../../utils/permissionChecker");
const { singleResponse } = require("../../utils/response");

// Delete Movie Controller
module.exports = async (req, db, user, isAuth) => {

    // Check Permission
    const checkPermissions = await checkPermission(user, isAuth);
    if (!checkPermissions.success) {
        return { message: "You dont have access to this route, please contact support!!!", status: false };
    }

    // Return If No Auth
    if (!user || !isAuth) return { message: "Not Authorized", status: false };

    // Helper
    const data = await deleteMovie(req, db, user);

    // Return Data
    return singleResponse(data);

}