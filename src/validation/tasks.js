import { body, oneOf } from 'express-validator'

const ucFirst = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('')

const requiredField = field =>
  body(field)
    .exists()
    .withMessage(`${ucFirst(field)} is required`)

const descriptionField = body('description')
  .trim()
  .notEmpty()
  .withMessage('Description must not be empty.')
  .bail()
  .isLength({ min: 4, max: 128 })
  .withMessage('Description must have between 4 and 128 characters long.')
  .optional()

const completedField = body('completed')
  .isBoolean()
  .withMessage('Completed must be true or false.')
  .optional()

const tasksValidator = {
  create: [requiredField('description'), descriptionField],
  update: [
    oneOf(
      [body('description').exists(), body('completed').exists()],
      'At least one of those fields are required: description / completed.'
    ),
    descriptionField,
    completedField
  ]
}

export default tasksValidator
