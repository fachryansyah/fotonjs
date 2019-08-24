let app = require("./../app")
let AuthController = require("./../app/Http/Controllers/AuthController")

app.get('/auth', AuthController.index)

module.exports = app