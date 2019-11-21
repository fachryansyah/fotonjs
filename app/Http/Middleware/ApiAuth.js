require('dotenv').config()
const User = require("../../Models/User")
const jwt = require("jsonwebtoken")

const ApiAuth = async (req, res, next) => {
    let apiKey = req.headers.authorization;
    if (!apiKey) {
        return res.json({
            message: "No api key has been set",
            status: 403,
            data: {},
            errors: true
        })
    }

    apiKey = apiKey.split(' ')[1]
    let verify = {}

    try {
        verify = await jwt.verify(apiKey, process.env.JWT_SECRET)
    } catch (e) {
        return res.json({
            message: "api key not valid",
            status: 403,
            data: {},
            errors: true
        })
    }

    const user = await User.query().findById(verify.id)
    if (user instanceof User == false) {
        return res.json({
            message: "User not found",
            status: 403,
            data: {},
            errors: true
        })
    }

    return next()
}

module.exports = ApiAuth;
