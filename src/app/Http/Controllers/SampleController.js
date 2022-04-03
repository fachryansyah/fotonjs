import Response from "../Utils/HttpResponse";

const SampleController = {
    index: async (req, res) => {
        return Response.success(res, { message: "hello world" });
    },
};

export default SampleController;
