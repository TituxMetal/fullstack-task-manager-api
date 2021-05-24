import { body, oneOf } from 'express-validator'

import objectIdValidator from './objectId'

const descriptionField = body('description')
  .trim()
  .isAlpha()
  .withMessage('Description must contain only letters [a-zA-Z]')
  .notEmpty()
  .withMessage('Description must not be empty.')
  .bail()
  .isLength({ min: 4, max: 128 })
  .withMessage('Description must have between 4 and 128 characters long.')
  .bail()
  .optional()

const completedField = body('completed')
  .isBoolean()
  .withMessage('Completed must be true or false.')
  .bail()
  .optional()

const tasksValidator = {
  create: [
    body('description').exists().withMessage('Description field is required.'),
    descriptionField
  ],
  update: [
    objectIdValidator,
    oneOf(
      [body('description').exists(), body('completed').exists()],
      'At least one of those fields are required: description / completed.'
    ),
    descriptionField,
    completedField
  ],
  remove: [objectIdValidator]
}

export default tasksValidator
