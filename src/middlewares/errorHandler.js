import { getErrorDetails } from '~/utils'

const errorHandler = (error, req, res, next) => {
  if (req.headersSent) {
    return next(error)
  }

  const errorDetails = getErrorDetails(error)

  if (error.code === 11000) {
    console.error('An error occured from mongoDb:', {
      type: 'Duplicate Field Error',
      reason: 'One or more fields have value that already exists.',
      fields: Object.keys(error.keyValue)
    })
  }

  if (error.kind === 'ObjectId') {
    console.error('An error occured from mongoDb:', {
      type: 'Cast to ObjectId failed',
      reason:
        'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters',
      fields: error.path
    })
  }

  if (!errorDetails.status) {
    errorDetails.status = error.statusCode || 500
  }

  res.set('Content-Type', 'application/problem+json')

  res.status(errorDetails.status).json(errorDetails)

  return next()
}

export default errorHandler
