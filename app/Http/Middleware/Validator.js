const HttpResponse = require('../Utils/HttpResponse')
const { validationResult } = require("express-validator")
const validator = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return HttpResponse.validationError(res, errors.array())
    }
    next()
}

module.exports = validator