require("dotenv").config();
import { v2 as cloudinary } from "cloudinary";
import { dataUri } from "../Http/Middleware/Multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function upload(req) {
  if (req.file) {
    const file = dataUri(req).content;

    return await cloudinary.uploader.upload(file);
  }
}
