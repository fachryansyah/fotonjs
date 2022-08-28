import Dotenv from "dotenv";
import { Request } from "express";
import { verify, sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import UserModel from "../Models/UserModel";

Dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "iamakey";

export async function user(req: Request) {
    // get api key, and set variable decoded
    let apiKey = req.headers.authorization;
    let decoded: any;

    // check if apiKey is set in header
    if (!apiKey) {
        return {
            message: "No api key has been set",
            error: true,
        };
    }

    // get the apiKey split by whitespace
    apiKey = apiKey.split(" ")[1];

    try {
        decoded = await verify(apiKey, JWT_SECRET);
    } catch (e) {
        return false;
    }

    // getting user info by id from apiKey
    const user: any = await UserModel.query().findById(decoded.id);

    // remove object id, and password
    // delete user["id"]
    delete user["password"];

    return user;
}
export async function attempt(credential: Auth) {
    let user: any = await UserModel.query().findOne({ email: credential.email });

    if (user instanceof UserModel == false) {
        return {
            message: "Can't find that user",
            error: true,
        };
    }

    const isPasswordMatch = await compare(credential.password, user.password);

    if (!isPasswordMatch) {
        return {
            message: "Wrong password",
            error: true,
        };
    }

    // generate new user token
    const apiKey = await sign({ id: user.id, email: user.email }, JWT_SECRET);

    user = user.toJSON(); // conver user to json
    user.apiKey = apiKey; // add apiKey in user data

    // remove object id, and password
    delete user["id"];
    delete user["password"];

    return user;
}
export async function register(req: Request) {
    // getting required fields
    const { fullname, email, password } = req.body;

    const hashPassword = await hash(password, 14);

    // insert new user to db
    const user = await UserModel.query().insert({
        avatar: `https://ui-avatars.com/api/?size=256&name=${fullname}`,
        fullname,
        email,
        password: hashPassword,
    });

    // check if user has been insert to db
    if (user instanceof UserModel == false) {
        return false;
    }

    return true;
}
