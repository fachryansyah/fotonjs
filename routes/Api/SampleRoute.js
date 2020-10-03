const Router = require('express').Router();

const SampleController = require("../../app/Http/Controllers/SampleController")


Router
  .get('/hello', SampleController.index)


module.exports = Router;