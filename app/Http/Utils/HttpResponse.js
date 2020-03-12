module.exports = {
    success: function(res, data) {
        return res.json({
            message: 'Request successfully!',
            code: 201,
            data,
        })
    },
    error: function(res, message) {
        return res.json({
            message,
            code: 500
        })
    },
    notFound: function(res, message) {
        return res.json({
            message,
            code: 404
        })
    },
    validationError: function(res, errors) {
        return res.json({
            message: 'Validation error, please check your input',
            code: 304,
            errors
        })
    }
}