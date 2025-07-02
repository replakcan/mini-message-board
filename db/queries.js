const pool = require('./pool')

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages')

  return rows
}

async function insertMessageByAuthor(author_name, message) {
  await pool.query('INSERT INTO messages (author_name, message) VALUES ($1, $2)', [author_name, message])
}

async function findMessageById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id=$1', [id])

  return rows[0]
}

module.exports = {
  getAllMessages,
  insertMessageByAuthor,
  findMessageById,
}
