require('dotenv').config()
const { Pool } = require('pg')
const { PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE, PG_PORT } = process.env

const database = new Pool({
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    port: PG_PORT,
    allowExitOnIdle: true
})

module.exports = database