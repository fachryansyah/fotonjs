import Knex from "knex";
import Dotenv from "dotenv";
Dotenv.config();

let connection = Knex({
    client: process.env.DB_DRIVER,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    pool: { min: 0, max: 3 },
});

export default connection;
