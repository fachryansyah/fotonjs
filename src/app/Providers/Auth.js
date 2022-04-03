require("dotenv").config();
import { verify, sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import User, { query } from "../Models/UserModel";

export async function user(req) {
  // get api key, and set variable decoded
  let apiKey = req.headers.authorization, decoded;

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
    decoded = await verify(apiKey, process.env.JWT_SECRET);
  } catch (e) {
    return false;
  }

  // getting user info by id from apiKey
  const user = await query().findById(decoded.id);

  // remove object id, and password
  // delete user["id"]
  delete user["password"];

  return user;
}
export async function check(req) { }
export async function attempt(credential) {
  let user = await query().findOne({ email: credential.email });

  if (user instanceof User == false) {
    return {
      message: "Can't find that user",
      error: true,
    };
  }

  const isPasswordMatch = await compare(
    credential.password,
    user.password
  );

  if (!isPasswordMatch) {
    return {
      message: "Wrong password",
      error: true,
    };
  }

  // generate new user token
  const apiKey = await sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET
  );

  user = user.toJSON(); // conver user to json
  user.apiKey = apiKey; // add apiKey in user data


  // remove object id, and password
  delete user["id"];
  delete user["password"];

  return user;
}
export async function register(req) {
  // getting required fields
  const { firstname, lastname, email, password } = req.body;

  const fullname = firstname + " " + lastname;
  const hashPassword = await hash(password, 14);

  // insert new user to db
  const user = await query().insert({
    avatar: "https://ui-avatars.com/api/?size=256&name=" + fullname,
    firstname,
    lastname,
    email,
    password: hashPassword,
  });

  // check if user has been insert to db
  if (user instanceof User == false) {
    return false;
  }

  return true;
}
