require("dotenv").config();
import { v4 } from "uuid";
import { existsSync, mkdirSync, renameSync, unlinkSync } from "fs";
import rootPath from "app-root-path";

export function upload(file: any, fileName: string, path: string) {
    let fileMime = file.mimetype.split("/")[1]; // get format file

    if (!fileName) {
        fileName = `${v4()}.${fileMime}`;
    }

    const fullPath = `${rootPath}/public/${path}`;

    //check public folder is exist
    if (!existsSync(fullPath)) {
        mkdirSync(fullPath);
    }

    // move image file to upload folder
    renameSync(file.path, `${fullPath}/${fileName}`);

    return `${path}/${fileName}`;
}
export function deleteFile(path: string) {
    try {
        unlinkSync(`${rootPath}/${path}`);
        return true;
    } catch (e: any) {
        console.log(e.message);
        return false;
    }
}
