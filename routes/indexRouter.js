const { Router } = require('express')
const uuid = require('uuid')

const messages = [
  {
    id: uuid.v4(),
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: uuid.v4(),
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

const indexRouter = Router()

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages })
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

indexRouter.post('/new', (req, res) => {
  const { author_name, message } = req.body

  messages.push({
    id: uuid.v4(),
    text: message,
    user: author_name,
    added: new Date(),
  })

  res.redirect('/')
})

indexRouter.get('/message/:messageId', (req, res) => {
  const { messageId } = req.params

  const message = messages.find((msg) => msg.id === messageId)

  if (!message) {
    return res.status(404).send('Message not found')
  }

  res.render('message', { title: 'Message Details', message })
})

module.exports = indexRouter
