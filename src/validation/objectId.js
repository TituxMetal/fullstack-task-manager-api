import { param } from 'express-validator'

const objectIdValidator = [
  param('id').isMongoId().withMessage('Id parameter must be a valid ObjectId')
]

export default objectIdValidator
