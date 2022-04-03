import UserModel from "../../Models/UserModel";
import Jwt from "jsonwebtoken";

const ApiAuth = async (req, res, next) => {
    let apiKey = req.headers.authorization;
    if (!apiKey) {
        return res.json({
            message: "No api key has been set",
            status: 403,
            data: {},
            errors: true,
        });
    }

    apiKey = apiKey.split(" ")[1];
    let verify = {};

    try {
        verify = await Jwt.verify(apiKey, process.env.JWT_SECRET);
    } catch (e) {
        return res.json({
            message: "api key not valid",
            status: 403,
            data: {},
            errors: true,
        });
    }

    const user = await UserModel.query().findById(verify.id);
    if (user instanceof UserModel == false) {
        return res.json({
            message: "User not found",
            status: 403,
            data: {},
            errors: true,
        });
    }

    return next();
};

module.exports = ApiAuth;
