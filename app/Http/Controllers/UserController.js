let UserModel = require("../../Model/UserModel")

const UserController = {
    getUsers: async function(req, res) {
        const users = await UserModel.query().orderBy("id", "desc")
        res.json({
            "message" : "OKE!",
            "status" : 200,
            "data" : users
        })
    }
}

module.exports = UserController