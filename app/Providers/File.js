require('dotenv').config();
const { v4 } = require('uuid');
const fs = require("fs");
const cloudinary = require('cloudinary').v2;
const rootPath = require('app-root-path');

module.exports = {
    upload: async (file, fileName, path) => {
        let fileMime = file.mimetype.split("/")[1]; // get format file

        if (!fileName) {
            fileName = `${v4()}.${fileMime}`;
        }

        const fullPath = `${rootPath}/public/${path}`;

        //check public folder is exist
        if (!fs.existsSync(fullPath)) {
            await fs.mkdirSync(fullPath);
        }

        // move image file to upload folder
        await fs.renameSync(file.path, `${fullPath}/${fileName}`);

        return `${path}/${fileName}`;

    },
    delete: async (path) => {
        try {
            await fs.unlinkSync(`${rootPath}/${path}`);
            return true;
        } catch (e) {
            console.log(e.message);
            return false;
        }
    }
};
