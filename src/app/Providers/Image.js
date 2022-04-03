require("dotenv").config();
import uuidv4 from "uuid/v4";
import { existsSync, mkdirSync, unlinkSync } from "fs";

export async function upload(image) {
    let imageFile = image;
    let imageMime = imageFile.mimetype.split("/")[1]; // get format image
    let isImage = ["png", "jpg", "jpeg", "svg", "gif"].includes(imageMime);

    // check is image or not
    if (!isImage) {
        return {
            message: `please upload an image file not ${imageMime} file`,
            error: true,
        };
    }

    // generate random name for image file
    const imageName = `${uuidv4()}.${imageMime}`;

    //check public folder is exist
    if (!existsSync("public")) {
        console.log("tidak ada");
        mkdirSync("public");
        mkdirSync("public/images");
    }

    // move image file to upload folder
    const moveImage = imageFile.mv(`public/images/${imageName}`);

    // check if error when moving image
    if (!moveImage) {
        return {
            message: "can't upload image",
            error: true,
        };
    }

    return imageName;
}
export async function deleteImage(imageName) {
    try {
        const deleteImage = unlinkSync(`public/images/${imageName}`);
        return true;
    } catch (e) {
        console.log(e.message);
        return false;
    }
}
