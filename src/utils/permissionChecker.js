// All Requires
const { db } = require("../db");

// Check Permission
const checkPermission = async (user, isAuth) => {
    // Check User Role Permission
    if(user && isAuth){
        // Extract User
        const id = user.id;
        const userData = await db.User.findOne({ _id: id });
        // Finally return the status
        if (userData.role !== "admin") response = { success: false }
        else response = { success: true }

        return response;
    } else {
        return response = { success: false }
    }
    
}

// Module Export
module.exports = {
    checkPermission
}