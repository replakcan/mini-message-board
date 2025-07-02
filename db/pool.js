const { Pool } = require('pg')
require('dotenv').config()

module.exports = new Pool({
  connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.PGDATABASE}`,
})
