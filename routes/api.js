const express = require("express")
const app = express()
const SampleRoute = require('./Api/SampleRoute');

app.use('/sample', SampleRoute);

module.exports = app
