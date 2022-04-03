require("dotenv").config();
// Update with your config settings.

module.exports = {
    development: {
        client: process.env.DB_DRIVER,
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: __dirname + "/database/migrations",
        },
        seeds: {
            directory: __dirname + "/database/seeds",
        },
    },

    production: {
        client: process.env.DB_DRIVER,
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: __dirname + "/database/migrations",
        },
        seeds: {
            directory: __dirname + "/database/seeds",
        },
    },
};
