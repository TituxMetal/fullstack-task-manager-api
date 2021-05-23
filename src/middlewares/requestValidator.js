import { validationResult } from 'express-validator'
import httpError from 'http-errors'

const requestValidator = validationRules => async (req, res, next) => {
  await Promise.all(validationRules.map(validation => validation.run(req)))

  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  const errorType = errors.mapped().id ? 400 : 422

  return next(httpError(errorType, { reason: errors.array() }))
}

export default requestValidator
