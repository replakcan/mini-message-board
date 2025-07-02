require('dotenv').config()
const { Client } = require('pg')

const SQL = `CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author_name VARCHAR ( 20 ), message VARCHAR ( 255 )
);

INSERT INTO messages (author_name, message)
VALUES ('Alper Akcan', 'hello from the other side'), ('Odin', 'selamin hello'), ('Deamon Lillard', 'Light weight babeee'); 
`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.PGDATABASE}`,
  })

  await client.connect()
  await client.query(SQL)
  await client.end()

  console.log('done')
}

main()
