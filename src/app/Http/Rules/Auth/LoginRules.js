import { body } from "express-validator";

const LoginRules = [
    body("username", "field email can't be null").exists(),
    body("username").custom((value) => {
        const rules = /^[a-zA-Z0-9_.]+$/;
        if (!rules.test(value)) {
            throw new Error(
                "Username is not valid, only a - z, A - Z, 0 - 9, and _ ."
            );
        } else {
            return true;
        }
    }),
    body("password", "field password can't be null").exists(),
];

export default LoginRules;
