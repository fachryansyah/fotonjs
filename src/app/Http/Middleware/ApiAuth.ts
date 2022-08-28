import { Response, Request, NextFunction } from "express";
import UserModel from "../../Models/UserModel";
import Jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET || "imakey";

const ApiAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let apiKey: string | undefined = req.headers.authorization;
        if (!apiKey) {
            return res.json({
                message: "No api key has been set",
                status: 403,
                data: {},
                errors: true,
            });
        }

        apiKey = apiKey.split(" ")[1];

        const verify: any = Jwt.verify(apiKey, JWT_SECRET);

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
    } catch (e) {
        return res.json({
            message: "api key not valid",
            status: 403,
            data: {},
            errors: true,
        });
    }
};

module.exports = ApiAuth;
