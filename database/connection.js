require("dotenv").config()

let knex = require("knex")({
    client: process.env.DB_DRIVER,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    pool: {min: 0, max: 3}
})

module.exports = knex