const User = require("../Models/UserModel")

const AuthServiceProvider = {
    user: async function (req) {
        const apiKey = req.headers.authorization.split(" ")[1]

        let user = await User.query().findOne({ api_key: apiKey })

        delete user["id"]
        delete user["password"]

        return user
    },
    attempt: async function (credential) {
        return credential
    },
    logout: async function (req) {
        const apiKey = req.headers.authorization.split(" ")[1]

        const user = User.query().where({
            api_key: apiKey
        }).patch({
            api_key: ""
        })

        return user
    }
}

module.exports = AuthServiceProvider
