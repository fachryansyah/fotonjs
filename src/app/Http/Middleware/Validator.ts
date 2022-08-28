import { Response, Request, NextFunction } from "express";
import { validationError } from "../Utils/HttpResponse";
import { validationResult } from "express-validator";
const validator = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return validationError(res, errors.array());
    }
    next();
};

export default validator;
