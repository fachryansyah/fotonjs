const Auth = require("../../Providers/Auth")
let UserModel = require("../../Models/UserModel")

const UserController = {
    getUsers: async function(req, res) {
        // get user data by ORM
        const users = await UserModel.query().orderBy("id", "desc")

        // Retrieving The Authenticated User with AuthServiceProvider
        const authenticatedUser = Auth.user(req) // the output should return user data

        res.json({
            "message" : "OKE!",
            "status" : 200,
            "data" : users
        })
    }
}

module.exports = UserController
