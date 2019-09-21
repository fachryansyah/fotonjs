const Auth = require("../../Providers/AuthServiceProvider")

const AuthController = {
    index: function (req, res) {
        res.send("hello world")
    },
    login: async function (req, res) {
        const credential = {
            email : req.body.email,
            password : req.body.password
        }

        res.send(await Auth.attempt(credential))

    }
}

module.exports = AuthController
