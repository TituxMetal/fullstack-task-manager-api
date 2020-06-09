import { RequestValidationError } from '@lgdweb/common-express-helpers'
import { validationResult } from 'express-validator'

const requestValidator = validationRules => async (req, _res, next) => {
  await Promise.all(validationRules.map(validation => validation.run(req)))

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }

  next()
}

export default requestValidator
