import { body } from 'express-validator'

const descriptionField = body('description').trim().notEmpty()
  .withMessage('Description must not be empty')
  .bail()
  .isLength({ min: 4, max: 128 })
  .withMessage('Description must have between 4 and 128 characters long')
  .bail()
  .optional()
const completedField = body('completed').optional().isBoolean()
  .withMessage('Completed must be true or false')

const tasksValidator = {
  create: [
    body('description')
      .exists({ checkFalsy: true, checkNull: true }).withMessage('Description is required').bail(),
    descriptionField,
    completedField
  ],
  edit: [
    descriptionField, completedField
  ]
}

export default tasksValidator
