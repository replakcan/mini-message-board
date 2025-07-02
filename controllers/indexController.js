const { body, validationResult } = require('express-validator')

const validateMessage = [
  body('author_name')
    .trim()
    .isAlpha()
    .withMessage('Author name can only contain alphabetical characters')
    .isLength({ min: 1, max: 20 })
    .withMessage('Author name must be between 1 and 20 characters'),

  body('message').isLength({ max: 100 }).withMessage('Message must be at most 100 characters long'),
]
