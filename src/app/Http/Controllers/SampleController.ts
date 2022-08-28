import { Request, Response } from "express";
import * as HttpResponse from "../Utils/HttpResponse";

export default {
    index: async (req: Request, res: Response) => {
        return HttpResponse.success(res, { message: "Hello World!" });
    },
};
