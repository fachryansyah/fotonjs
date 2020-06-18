module.exports = {
    success: function(res, data) {
        return res.status(200).json({
            message: 'Request successfully!',
            code: 200,
            data,
        })
    },
    error: function(res, message) {
        return res.status(500).json({
            message,
            code: 500
        })
    },
    notFound: function(res, message) {
        return res.status(404).json({
            message,
            code: 404
        })
    },
    validationError: function(res, errors) {
        return res.status(304).json({
            message: 'Validation error, please check your input',
            code: 304,
            errors
        })
    }
}