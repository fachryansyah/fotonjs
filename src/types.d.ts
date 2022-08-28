interface JWTAuth {
    id: string;
    email: string;
    issued: number;
    expires: number;
}

interface Auth {
    email: string;
    password: string;
}
