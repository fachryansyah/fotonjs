import { validationError } from "../Utils/HttpResponse";
import { validationResult } from "express-validator";
const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return validationError(res, errors.array());
  }
  next();
};

export default validator;
