require('dotenv').config()
const cloudinary = require('cloudinary').v2
const { dataUri } = require("../Http/Middleware/Multer")

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = {
    upload: async (req) => {
        if (req.file) {
            const file = dataUri(req).content

            return await cloudinary.uploader.upload(file)
        }
    }
}