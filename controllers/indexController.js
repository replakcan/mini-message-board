const { body, validationResult } = require('express-validator')

const validateMessage = [
  body('author_name')
    .trim()
    .isAlpha()
    .withMessage('Author name can only contain alphabetical characters')
    .isLength({ min: 1, max: 20 })
    .withMessage('Author name must be between 1 and 20 characters'),

  body('message').isLength({ max: 255 }).withMessage('Message must be at most 255 characters long'),
]
