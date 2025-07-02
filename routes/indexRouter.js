const { Router } = require('express')
const {
  createMessageGet,
  getAllMessages,
  createMessagePost,
  getMessageById,
} = require('../controllers/indexController')

const indexRouter = Router()

indexRouter.get('/', getAllMessages)

indexRouter.get('/new', createMessageGet)

indexRouter.post('/new', createMessagePost)

indexRouter.get('/message/:messageId', getMessageById)

module.exports = indexRouter
