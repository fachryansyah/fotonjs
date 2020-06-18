const express = require("express")
const app = express()

const SampleController = require("./../app/Http/Controllers/SampleController")


app.get('/hello', SampleController.index)

module.exports = app
