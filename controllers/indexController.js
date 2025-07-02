const { body, validationResult } = require('express-validator')
const db = require('../db/queries')

const validateMessage = [
  body('author_name')
    .trim()
    .isAlpha()
    .withMessage('Author name can only contain alphabetical characters')
    .isLength({ min: 1, max: 20 })
    .withMessage('Author name must be between 1 and 20 characters'),

  body('message').isLength({ max: 255 }).withMessage('Message must be at most 255 characters long'),
]

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages()

  res.render('index', { title: 'Mini Messageboard', messages })
}

async function createMessageGet(req, res) {
  res.render('form')
}

async function createMessagePost(req, res) {
  const { author_name, message } = req.body

  await db.insertMessageByAuthor(author_name, message)

  res.redirect('/')
}

async function getMessageById(req, res) {
  const { messageId } = req.params

  const message = await db.findMessageById(messageId)

  if (!message) {
    return res.status(404).send('Message not found')
  }

  res.render('message', { title: 'Message Details', message })
}

module.exports = {
  getAllMessages,
  createMessageGet,
  createMessagePost,
  getMessageById,
}
