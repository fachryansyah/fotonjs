import multer, { memoryStorage } from "multer";
import Datauri from "datauri";
import { extname } from "path";

const storage = memoryStorage();

const multerUploads = multer({ storage }).single("image");
const localUpload = multer({ dest: "./public" });

const dUri = new Datauri();

/**
 * @description This function converts the buffer to data url
 * @param {Object} req containing the field object
 * @returns {String} The data url from the string buffer
 */

const dataUri = (req) =>
    dUri.format(extname(req.file.originalname).toString(), req.file.buffer);

export default { multerUploads, localUpload, dataUri };
