import multer, { memoryStorage } from "multer";
const storage = memoryStorage();

const multerUploads = multer({ storage }).single("image");
const localUpload = multer({ dest: "./public" });

export default { multerUploads, localUpload };
