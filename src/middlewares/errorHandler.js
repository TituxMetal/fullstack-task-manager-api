import { CustomError } from '@lgdweb/common-express-helpers'

const errorHandler = (err, _req, res, _next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() })
  }

  return res.status(500).json({ errors: [{ message: `Something went wrong: ${err.message}` }] })
}

export default errorHandler
