const Auth = require("../../Providers/Auth")
let UserModel = require("../../Models/UserModel")
const Response = require("../Utils/HttpResponse")

const UserController = {
    getUsers: async function(req, res) {
        // get user data by ORM
        const users = await UserModel.query().orderBy("id", "desc")

        // Retrieving The Authenticated User with AuthServiceProvider
        const authenticatedUser = Auth.user(req) // the output should return user data

        return Response.success(res, users)
    }
}

module.exports = UserController
