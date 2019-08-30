let app = require("./../app")
let AuthController = require("./../app/Http/Controllers/AuthController")
let UserController = require("./../app/Http/Controllers/UserController")

app.get('/auth', AuthController.index)

app.get("/get/user", UserController.getUsers)

module.exports = app