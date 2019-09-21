let express = require("express")
let app = express()

let AuthController = require("./../app/Http/Controllers/AuthController")
let UserController = require("./../app/Http/Controllers/UserController")

app.get("/auth", AuthController.index)
app.post("/auth/login", AuthController.login)

app.get("/get/user", UserController.getUsers)

module.exports = app
