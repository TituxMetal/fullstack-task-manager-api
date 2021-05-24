import { check } from 'express-validator'

const objectIdValidator = check('id')
  .isMongoId()
  .withMessage('Id parameter must be a valid ObjectId.')
  .bail()

export default objectIdValidator
