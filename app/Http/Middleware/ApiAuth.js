const User = require("../../Models/UserModel")

const ApiAuth = async (req, res, next) => {
    let apiKey = req.headers.authorization
    if (apiKey) {
        apiKey = apiKey.split(" ")[1]
    }else {
        return res.json({
            message: "No api key has been set",
            code: 403
        })
    }

    const isAuthenticated = await User.query().findOne({ api_key: apiKey })
    if (isAuthenticated instanceof User == false) {
        return res.json({
            message: "Unauthorized action",
            code: 403
        })
    }

    return next()
}

module.exports = ApiAuth
