
const Response = require("../Utils/HttpResponse")

const SampleController = {
    index: async (req, res) => {

        return Response.success(res, {message: "hello world"})
    }
}

module.exports = SampleController
    