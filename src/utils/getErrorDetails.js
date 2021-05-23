import httpError from 'http-errors'

const defaultErrorDetails = {
  type: 'about:blank',
  status: 500
}

const errorTypes = [
  {
    matchErrorClass: httpError.BadRequest,
    details: {
      title: 'Bad Request',
      status: 400
    },
    occurrenceDetails(error) {
      return { reason: error.reason }
    }
  },
  {
    matchErrorClass: httpError.UnprocessableEntity,
    details: {
      title: 'Unprocessable Entity',
      status: 422
    },
    occurrenceDetails(error) {
      return {
        reasons: error.reason.map(({ msg, param, value }) => ({
          field: param,
          value,
          message: msg
        }))
      }
    }
  },
  {
    matchErrorClass: httpError.Unauthorized,
    details: {
      title: 'Unauthorized',
      status: 401
    },
    occurrenceDetails(error) {
      return { reason: error.reason }
    }
  },
  {
    matchErrorClass: httpError.NotFound,
    details: {
      title: 'Not Found',
      status: 404
    },
    occurrenceDetails(error) {
      return { reason: error.reason }
    }
  }
]

const getErrorDetails = error => {
  const errorType = errorTypes.find(
    type => error instanceof type.matchErrorClass
  )

  if (!errorType) {
    return defaultErrorDetails
  }

  const errorDetails = { ...errorType.details }

  if (typeof errorType.occurrenceDetails === 'function') {
    Object.assign(errorDetails, errorType.occurrenceDetails(error))
  }

  return errorDetails
}

export default getErrorDetails
