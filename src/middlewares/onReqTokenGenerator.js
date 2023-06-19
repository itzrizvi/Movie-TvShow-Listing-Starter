const { verify } = require("jsonwebtoken");
const { db } = require("../db");

const onReqTokenGenerate = async (req, res, next) => {
    const authToken = req.get('Authorization') || '';

    if (!authToken) {
        req.isAuth = false;
        return next();
    }

    let decodeToken;
    try {
        decodeToken = verify(authToken, process.env.JWT_SECRET)
    } catch (error) {
        req.isAuth = false;
        return next();
    }

    if (!decodeToken) {
        req.isAuth = false;
        return next();
    }

    let authUser;
    try {
        authUser = await db.User.findOne({ _id: decodeToken.id });
    } catch (error) {
        req.isAuth = false;
        return next();
    }

    if (!authUser) {
        req.isAuth = false;
        return next();
    }

    req.user = authUser;
    req.isAuth = true;

    return next();
}

module.exports = onReqTokenGenerate;
