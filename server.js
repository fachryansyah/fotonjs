require('dotenv').config()
let app = require("./app")
let routeApi = require("./routes/api")
let bodyParser = require("body-parser")

const port = process.env.APP_PORT

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Backend started on port ${port}`))
